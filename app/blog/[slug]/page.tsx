"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "building-a-real-time-notification-system": {
      title: "Building a Real-time Notification System",
      date: "May 10, 2023",
      description: "Learn how to build a scalable real-time notification system using WebSockets and Redis.",
      content: `
        <p>Real-time notifications have become an essential part of modern web applications. They provide immediate feedback to users about events that are relevant to them, enhancing the user experience and engagement.</p>
        
        <h2>Why Real-time Notifications Matter</h2>
        <p>In today's fast-paced digital world, users expect to be informed about important events as they happen. Whether it's a new message, a friend request, or an update to a post they're following, real-time notifications keep users engaged and coming back to your application.</p>
        
        <h2>Technologies We'll Use</h2>
        <ul>
          <li><strong>WebSockets</strong>: For maintaining a persistent connection between the client and server</li>
          <li><strong>Redis</strong>: As a pub/sub mechanism and for storing notification data</li>
          <li><strong>Node.js</strong>: For our server-side implementation</li>
          <li><strong>React</strong>: For our client-side UI</li>
        </ul>
        
        <h2>Setting Up the Server</h2>
        <p>First, we'll need to set up a WebSocket server using a library like Socket.IO. This will handle the real-time communication between our server and clients.</p>
        
        <pre><code>
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const Redis = require('ioredis');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Redis clients for pub/sub
const redisSubscriber = new Redis();
const redisPublisher = new Redis();

// Subscribe to the notification channel
redisSubscriber.subscribe('notifications');

// Listen for messages from Redis and broadcast to connected clients
redisSubscriber.on('message', (channel, message) => {
  if (channel === 'notifications') {
    const notification = JSON.parse(message);
    io.to(notification.userId).emit('notification', notification);
  }
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Authenticate user and join their room
  socket.on('authenticate', (userId) => {
    socket.join(userId);
    console.log(\`User ${userId} authenticated\`);
  });
  
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
        </code></pre>
        
        <h2>Creating the Notification Service</h2>
        <p>Next, we'll create a service that will handle sending notifications to users:</p>
        
        <pre><code>
class NotificationService {
  constructor(redisClient) {
    this.redisClient = redisClient;
  }
  
  async sendNotification(userId, notification) {
    // Store the notification in Redis
    const notificationId = await this.redisClient.incr('notification:id');
    const notificationData = {
      id: notificationId,
      userId,
      read: false,
      timestamp: Date.now(),
      ...notification
    };
    
    // Save to Redis
    await this.redisClient.hset(
      \`user:\${userId}:notifications\`,
      notificationId,
      JSON.stringify(notificationData)
    );

    // Publish to Redis channel
    await this.redisClient.publish(
      'notifications',
      JSON.stringify(notificationData)
    );
    
    return notificationData;
  }
  
  async getNotifications(userId) {
    const notifications = await this.redisClient.hgetall(\`user:\${userId}:notifications\`);
    return Object.values(notifications).map(n => JSON.parse(n));
  }
  
  async markAsRead(userId, notificationId) {
    const notification = await this.redisClient.hget(
      \`user:\${userId}:notifications\`,
      notificationId
    );
    
    if (notification) {
      const notificationData = JSON.parse(notification);
      notificationData.read = true;
      
      await this.redisClient.hset(
        \`user:\${userId}:notifications\`,
        notificationId,
        JSON.stringify(notificationData)
      );
      
      return notificationData;
    }
    
    return null;
  }
}

module.exports = NotificationService;
        </code></pre>
        
        <h2>Building the Client-Side UI</h2>
        <p>Finally, we'll create a React component to display notifications to the user:</p>
        
        <pre><code>
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const NotificationCenter = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    // Connect to WebSocket server
    const socketInstance = io('http://localhost:3000');
    setSocket(socketInstance);
    
    // Authenticate with the server
    socketInstance.emit('authenticate', userId);
    
    // Listen for new notifications
    socketInstance.on('notification', (notification) => {
      setNotifications(prev => [notification, ...prev]);
    });
    
    // Fetch existing notifications
    const fetchNotifications = async () => {
      const response = await fetch(\`/api/notifications?userId=\${userId}\`);
      const data = await response.json();
      setNotifications(data);
    };
    
    fetchNotifications();
    
    return () => {
      socketInstance.disconnect();
    };
  }, [userId]);
  
  const markAsRead = async (notificationId) => {
    await fetch('/api/notifications/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, notificationId })
    });
    
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };
  
  return (
    <div className="notification-center">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p>No notifications yet</p>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id} 
              className={\`notification \${notification.read ? 'read' : 'unread'}\`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="notification-content">
                {notification.content}
              </div>
              <div className="notification-time">
                {new Date(notification.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>Building a real-time notification system requires careful consideration of scalability, reliability, and user experience. By using WebSockets for real-time communication and Redis for pub/sub messaging, we can create a robust system that can handle a large number of users and notifications.</p>
        
        <p>In a production environment, you might want to consider additional features such as:</p>
        <ul>
          <li>Notification preferences and filtering</li>
          <li>Push notifications for mobile and desktop</li>
          <li>Batching notifications to reduce server load</li>
          <li>Fallback mechanisms for when WebSockets aren't available</li>
        </ul>
        
        <p>With these considerations in mind, you can build a notification system that enhances your application's user experience and keeps users engaged.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["WebSockets", "Redis", "Node.js"],
    },
    "introduction-to-web3-development": {
      title: "Introduction to Web3 Development",
      date: "April 22, 2023",
      description: "A beginner's guide to getting started with Web3 development using Ethereum and Solidity.",
      content: `
        <p>Web3 represents the next evolution of the internet, focusing on decentralization and user ownership. In this guide, we'll explore the basics of Web3 development and how you can get started building decentralized applications (dApps).</p>
        
        <h2>What is Web3?</h2>
        <p>Web3 refers to a decentralized version of the internet built on blockchain technology. Unlike Web2, which is dominated by centralized platforms and services, Web3 aims to give users control over their data and digital assets through decentralized networks.</p>
        
        <h2>Key Components of Web3</h2>
        <ul>
          <li><strong>Blockchain</strong>: The underlying technology that enables decentralized, trustless transactions</li>
          <li><strong>Smart Contracts</strong>: Self-executing contracts with the terms directly written into code</li>
          <li><strong>Decentralized Applications (dApps)</strong>: Applications that run on a blockchain network</li>
          <li><strong>Tokens</strong>: Digital assets that represent value or utility within a blockchain ecosystem</li>
        </ul>
        
        <h2>Getting Started with Ethereum Development</h2>
        <p>Ethereum is one of the most popular platforms for Web3 development. Here's how to get started:</p>
        
        <h3>Setting Up Your Development Environment</h3>
        <p>First, you'll need to set up your development environment:</p>
        <ol>
          <li>Install Node.js and npm</li>
          <li>Install Truffle or Hardhat (development frameworks for Ethereum)</li>
          <li>Install Ganache (local Ethereum blockchain for testing)</li>
          <li>Install MetaMask (browser extension for interacting with Ethereum)</li>
        </ol>
        
        <h3>Writing Your First Smart Contract</h3>
        <p>Smart contracts are the building blocks of dApps. Here's a simple example of a smart contract written in Solidity:</p>
        
        <pre><code>
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;
    
    function set(uint256 x) public {
        storedData = x;
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}
        </code></pre>
        
        <h3>Deploying Your Smart Contract</h3>
        <p>Using Truffle, you can deploy your smart contract to a local blockchain:</p>
        
        <pre><code>
// migrations/2_deploy_contracts.js
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
        </code></pre>
        
        <p>Then run:</p>
        <pre><code>
truffle migrate
        </code></pre>
        
        <h3>Building a Frontend for Your dApp</h3>
        <p>You can use web3.js or ethers.js to interact with your smart contract from a web frontend:</p>
        
        <pre><code>
import { ethers } from "ethers";
import SimpleStorage from "./contracts/SimpleStorage.json";

async function connectToContract() {
  // Connect to Ethereum provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  
  // Get the deployed contract
  const networkId = await provider.getNetwork();
  const deployedNetwork = SimpleStorage.networks[networkId.chainId];
  const contract = new ethers.Contract(
    deployedNetwork.address,
    SimpleStorage.abi,
    signer
  );
  
  return contract;
}

async function setValue(value) {
  const contract = await connectToContract();
  const transaction = await contract.set(value);
  await transaction.wait();
  console.log("Value set successfully");
}

async function getValue() {
  const contract = await connectToContract();
  const value = await contract.get();
  console.log("Stored value:", value.toString());
  return value;
}
        </code></pre>
        
        <h2>Web3 Development Tools and Resources</h2>
        <h3>Development Frameworks</h3>
        <ul>
          <li><strong>Truffle</strong>: A development environment, testing framework, and asset pipeline for Ethereum</li>
          <li><strong>Hardhat</strong>: Ethereum development environment designed for professionals</li>
          <li><strong>Brownie</strong>: Python-based development and testing framework for smart contracts</li>
        </ul>
        
        <h3>Libraries</h3>
        <ul>
          <li><strong>web3.js</strong>: JavaScript library for interacting with Ethereum</li>
          <li><strong>ethers.js</strong>: Complete Ethereum library with wallet implementation</li>
          <li><strong>OpenZeppelin Contracts</strong>: Library of secure, reusable smart contracts</li>
        </ul>
        
        <h3>Testing and Deployment</h3>
        <ul>
          <li><strong>Ganache</strong>: Personal Ethereum blockchain for development and testing</li>
          <li><strong>Remix</strong>: Web-based IDE for Solidity development</li>
          <li><strong>Infura</strong>: Infrastructure provider for connecting to Ethereum networks</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Web3 development opens up new possibilities for creating decentralized, user-centric applications. While there's a learning curve, the tools and resources available make it increasingly accessible to developers from all backgrounds.</p>
        
        <p>As you continue your Web3 journey, remember to:</p>
        <ul>
          <li>Prioritize security in your smart contract development</li>
          <li>Stay updated on the latest developments in the ecosystem</li>
          <li>Engage with the community through forums, Discord channels, and meetups</li>
          <li>Start small and gradually build more complex applications</li>
        </ul>
        
        <p>Happy building in the decentralized future!</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Web3", "Ethereum", "Solidity"],
    },
    "creating-a-cli-tool-with-rust": {
      title: "Creating a CLI Tool with Rust",
      date: "March 15, 2023",
      description: "Step-by-step guide to building your first command-line interface tool using Rust.",
      content: `
        <p>Rust is an excellent language for building command-line tools due to its performance, safety, and robust ecosystem. In this tutorial, we'll build a simple CLI tool that can help you manage your tasks from the terminal.</p>
        
        <h2>Why Rust for CLI Tools?</h2>
        <p>Rust offers several advantages for CLI development:</p>
        <ul>
          <li>Fast execution with low resource usage</li>
          <li>Strong type system that prevents common bugs</li>
          <li>Excellent package ecosystem through Cargo</li>
          <li>Cross-platform compatibility</li>
          <li>Single binary output that's easy to distribute</li>
        </ul>
        
        <h2>Setting Up Your Project</h2>
        <p>Let's start by creating a new Rust project:</p>
        
        <pre><code>
cargo new task-manager
cd task-manager
        </code></pre>
        
        <p>Next, we'll add some dependencies to our <code>Cargo.toml</code> file:</p>
        
        <pre><code>
[package]
name = "task-manager"
version = "0.1.0"
edition = "2021"

[dependencies]
clap = { version = "4.0", features = ["derive"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
home = "0.5"
chrono = "0.4"
        </code></pre>
        
        <h2>Defining Our Data Structures</h2>
        <p>Let's define the data structures we'll use to represent tasks:</p>
        
        <pre><code>
use chrono::{DateTime, Local};
use serde::{Deserialize, Serialize};
use std::fmt;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum TaskStatus {
    Pending,
    InProgress,
    Completed,
}

impl fmt::Display for TaskStatus {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            TaskStatus::Pending => write!(f, "Pending"),
            TaskStatus::InProgress => write!(f, "In Progress"),
            TaskStatus::Completed => write!(f, "Completed"),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Task {
    pub id: usize,
    pub title: String,
    pub description: Option<String>,
    pub status: TaskStatus,
    pub created_at: DateTime<Local>,
    pub completed_at: Option<DateTime<Local>>,
}

impl Task {
    pub fn new(id: usize, title: String, description: Option<String>) -> Self {
        Task {
            id,
            title,
            description,
            status: TaskStatus::Pending,
            created_at: Local::now(),
            completed_at: None,
        }
    }
    
    pub fn mark_in_progress(&mut self) {
        self.status = TaskStatus::InProgress;
    }
    
    pub fn mark_completed(&mut self) {
        self.status = TaskStatus::Completed;
        self.completed_at = Some(Local::now());
    }
}

impl fmt::Display for Task {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "#{} [{}] {}\n  Created: {}",
            self.id,
            self.status,
            self.title,
            self.created_at.format("%Y-%m-%d %H:%M")
        )?;
        
        if let Some(desc) = &self.description {
            write!(f, "\n  Description: {}", desc)?;
        }
        
        if let Some(completed) = self.completed_at {
            write!(
                f,
                "\n  Completed: {}",
                completed.format("%Y-%m-%d %H:%M")
            )?;
        }
        
        Ok(())
    }
}
        </code></pre>
        
        <h2>Creating a Task Repository</h2>
        <p>Now, let's create a repository to manage our tasks:</p>
        
        <pre><code>
use crate::task::{Task, TaskStatus};
use home::home_dir;
use serde_json;
use std::fs::{self, File};
use std::io::{self, Read, Write};
use std::path::PathBuf;

pub struct TaskRepository {
    file_path: PathBuf,
    tasks: Vec<Task>,
}

impl TaskRepository {
    pub fn new() -> Result<Self, io::Error> {
        let mut path = home_dir().unwrap_or_default();
        path.push(".tasks.json");
        
        let tasks = if path.exists() {
            let mut file = File::open(&path)?;
            let mut contents = String::new();
            file.read_to_string(&mut contents)?;
            serde_json::from_str(&contents).unwrap_or_default()
        } else {
            Vec::new()
        };
        
        Ok(TaskRepository {
            file_path: path,
            tasks,
        })
    }
    
    pub fn save(&self) -> Result<(), io::Error> {
        let json = serde_json::to_string_pretty(&self.tasks)?;
        let mut file = File::create(&self.file_path)?;
        file.write_all(json.as_bytes())?;
        Ok(())
    }
    
    pub fn add_task(&mut self, title: String, description: Option<String>) -> Result<&Task, io::Error> {
        let id = self.next_id();
        let task = Task::new(id, title, description);
        self.tasks.push(task);
        self.save()?;
        Ok(self.tasks.last().unwrap())
    }
    
    pub fn list_tasks(&self, status: Option<TaskStatus>) -> Vec<&Task> {
        self.tasks
            .iter()
            .filter(|task| {
                if let Some(s) = &status {
                    match (s, &task.status) {
                        (TaskStatus::Pending, TaskStatus::Pending) => true,
                        (TaskStatus::InProgress, TaskStatus::InProgress) => true,
                        (TaskStatus::Completed, TaskStatus::Completed) => true,
                        _ => false,
                    }
                } else {
                    true
                }
            })
            .collect()
    }
    
    pub fn get_task(&self, id: usize) -> Option<&Task> {
        self.tasks.iter().find(|task| task.id == id)
    }
    
    pub fn update_task_status(&mut self, id: usize, status: TaskStatus) -> Result<Option<&Task>, io::Error> {
        if let Some(task) = self.tasks.iter_mut().find(|task| task.id == id) {
            match status {
                TaskStatus::Pending => {}
                TaskStatus::InProgress => task.mark_in_progress(),
                TaskStatus::Completed => task.mark_completed(),
            }
            self.save()?;
            Ok(self.get_task(id))
        } else {
            Ok(None)
        }
    }
    
    pub fn delete_task(&mut self, id: usize) -> Result<bool, io::Error> {
        let len = self.tasks.len();
        self.tasks.retain(|task| task.id != id);
        let deleted = self.tasks.len() < len;
        if deleted {
            self.save()?;
        }
        Ok(deleted)
    }
    
    fn next_id(&self) -> usize {
        self.tasks
            .iter()
            .map(|task| task.id)
            .max()
            .unwrap_or(0)
            .checked_add(1)
            .unwrap_or(1)
    }
}
        </code></pre>
        
        <h2>Building the CLI Interface</h2>
        <p>Now, let's use Clap to build our command-line interface:</p>
        
        <pre><code>
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "task")]
#[command(about = "A simple task manager CLI", long_about = None)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    /// Add a new task
    Add {
        /// The title of the task
        #[arg(required = true)]
        title: String,
        
        /// An optional description
        #[arg(short, long)]
        description: Option<String>,
    },
    
    /// List all tasks
    List {
        /// Filter by status (pending, in-progress, completed)
        #[arg(short, long)]
        status: Option<String>,
    },
    
    /// Show details of a specific task
    Show {
        /// The ID of the task
        #[arg(required = true)]
        id: usize,
    },
    
    /// Update the status of a task
    Update {
        /// The ID of the task
        #[arg(required = true)]
        id: usize,
        
        /// The new status (pending, in-progress, completed)
        #[arg(required = true)]
        status: String,
    },
    
    /// Delete a task
    Delete {
        /// The ID of the task
        #[arg(required = true)]
        id: usize,
    },
}
        </code></pre>
        
        <h2>Putting It All Together</h2>
        <p>Finally, let's implement our main function to handle the CLI commands:</p>
        
        <pre><code>
mod cli;
mod repository;
mod task;

use clap::Parser;
use cli::{Cli, Commands};
use repository::TaskRepository;
use task::TaskStatus;

fn main() {
    let cli = Cli::parse();
    
    match TaskRepository::new() {
        Ok(mut repo) => {
            match cli.command {
                Commands::Add { title, description } => {
                    match repo.add_task(title, description) {
                        Ok(task) => println!("Task added:\n{}", task),
                        Err(e) => eprintln!("Error adding task: {}", e),
                    }
                }
                
                Commands::List { status } => {
                    let filter_status = match status.as_deref() {
                        Some("pending") => Some(TaskStatus::Pending),
                        Some("in-progress") => Some(TaskStatus::InProgress),
                        Some("completed") => Some(TaskStatus::Completed),
                        _ => None,
                    };
                    
                    let tasks = repo.list_tasks(filter_status);
                    
                    if tasks.is_empty() {
                        println!("No tasks found.");
                    } else {
                        for task in tasks {
                            println!("{}\n", task);
                        }
                        println!("Total: {} tasks", tasks.len());
                    }
                }
                
                Commands::Show { id } => {
                    match repo.get_task(id) {
                        Some(task) => println!("{}", task),
                        None => println!("Task not found."),
                    }
                }
                
                Commands::Update { id, status } => {
                    let new_status = match status.as_str() {
                        "pending" => TaskStatus::Pending,
                        "in-progress" => TaskStatus::InProgress,
                        "completed" => TaskStatus::Completed,
                        _ => {
                            eprintln!("Invalid status. Use 'pending', 'in-progress', or 'completed'.");
                            return;
                        }
                    };
                    
                    match repo.update_task_status(id, new_status) {
                        Ok(Some(task)) => println!("Task updated:\n{}", task),
                        Ok(None) => println!("Task not found."),
                        Err(e) => eprintln!("Error updating task: {}", e),
                    }
                }
                
                Commands::Delete { id } => {
                    match repo.delete_task(id) {
                        Ok(true) => println!("Task deleted."),
                        Ok(false) => println!("Task not found."),
                        Err(e) => eprintln!("Error deleting task: {}", e),
                    }
                }
            }
        }
        Err(e) => eprintln!("Error initializing task repository: {}", e),
    }
}
        </code></pre>
        
        <h2>Building and Using Our CLI Tool</h2>
        <p>Now we can build and use our task manager:</p>
        
        <pre><code>
cargo build --release
        </code></pre>
        
        <p>The binary will be available at <code>target/release/task-manager</code>. Here's how to use it:</p>
        
        <pre><code>
# Add a new task
./task-manager add "Learn Rust" --description "Complete the Rust book and build a project"

# List all tasks
./task-manager list

# List only pending tasks
./task-manager list --status pending

# Show a specific task
./task-manager show 1

# Update a task's status
./task-manager update 1 in-progress

# Delete a task
./task-manager delete 1
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>Congratulations! You've built a functional CLI tool in Rust. This is just the beginning - you can extend this application with features like:</p>
        
        <ul>
          <li>Due dates and reminders</li>
          <li>Priority levels</li>
          <li>Tags or categories</li>
          <li>Colorful output using a crate like <code>colored</code></li>
          <li>Interactive selection using <code>dialoguer</code></li>
        </ul>
        
        <p>Rust's ecosystem makes it easy to build powerful, reliable CLI tools. As you become more comfortable with the language, you'll find that it's an excellent choice for a wide range of applications beyond the command line.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Rust", "CLI", "Programming"],
    },
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
          <div className="mb-8 mt-24">
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Link>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
            <h1 className="mb-8 text-3xl font-bold">Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
        </div>

        <article className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-gray-300"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg sm:h-96">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>

          <div
            className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}
