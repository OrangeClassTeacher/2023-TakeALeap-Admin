import { Token } from "typescript";

export interface IRestaurant {
  _id?: string;
  restaurantName?: string;
  address: {
    district: string;
    street: string;
    building: string;
    address: string;
    location: {
      type: string;
      coordinates: number[];
    };
  };
  restaurantRate?: [
    {
      rateType?: string;
      userId?: string;
      score?: number;
      comment?: string;
    }
  ];
  cuisineType: string[];
  contact?: {
    phone?: number;
    facebook?: string;
    instagram?: string;
    link?: string;
  };
  email?: string;
  img: string[];
  logoImg: string;
  schedule?: {
    weekday?: { open?: number; close?: number };
    weekend?: { open?: number; close?: number };
  };
  description?: string;
  createdAt: string;
  updatedAt: string;
  token?: string
}

export interface IFood {
  _id: string | null | string[];
  foodName: string;
  restaurantId: string | null;
  price: number;
  foodType: string;
  img: string[];
  ingredients: string;
  description: string;
  token: string | null;
}

export interface IBeverage {
  _id: string | null | string[];
  beverageName: string;
  restaurantId: string | null;
  price: number;
  beverageType: string;
  img: string[];
  ingredients: string;
  description: string;
  token: string | null;
}


export interface IResImg {
  img: string[]
  logoImg: string | null
}


export interface IDashboard {
  status: boolean;
  data: {
    foodRate: {
      _id: string;
      avg_rate: number;
    };
    latestComms: {
      _id: string;
      restaurantId: string;
      foodId: string;
      comment: string;
      createdAt: string;
    }[];
    resRate: {
      _id: string;
      avg_score: number;
    };
    topFood: {
      foodId: string;
      food: {
        _id: string;
        foodName: string;
        restaurantId: string;
        price: number;
        foodType: string;
        img: string[];
        ingredients: string[];
        createdAt: string;
        updatedAt: string;
        __v: number;
      };
      avg_rate: number;
    }[];
  };
}
