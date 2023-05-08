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
  cuisineType?: string[];
  contact?: {
    phone?: number;
    facebook?: string;
    Instagram?: string;
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
  foodRate:
  {
    avg_rate: number
  }
  ,
  latestComms:
  {
    restaurantId: string,
    foodId: string,
    comment: string,
    createdAt: string
  }
  ,
  resRate:
  {
    avg_score: number
  }
  ,
  topFood:
  {
    foodId: string,
    food: {
      foodName: string,
      restaurantId: string,
      price: number,
      foodType: string,
      img: string[],
      ingredients: string[],
      createdAt: string,
      updatedAt: string,
    },
    avg_rate: number
  }

}
