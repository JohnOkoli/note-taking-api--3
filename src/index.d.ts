import { Request } from "express";
import mongoose from "mongoose";

// Global type augmentation for Express
declare global {
  namespace Express {
    interface Request {
      user?: { 
        userId: string; 
      };
    }
  }
}

// Note related interfaces
export interface INote {
  _id?: string;
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  user: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Category related interfaces
export interface ICategory {
  _id?: string;
  name: string;
  description?: string;
  user: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// User related interfaces
export interface IUser {
  _id?: string;
  userName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// API Response interfaces
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: any;
}

// Auth related interfaces
export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  userName: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  user: {
    _id: string;
    userName: string;
    email: string;
  };
}

// Query parameters interfaces
export interface INoteQueryParams {
  category?: string;
  tags?: string[];
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Pagination interface
export interface IPaginatedResponse<T> {}
