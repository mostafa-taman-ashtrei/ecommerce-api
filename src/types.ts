export interface UserType {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface LoginUserData {
    username: string;
    password: string;
}

export interface RegisterUserData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface ProductType {
    title: string;
    description: string;
    price: number;
    quantity: number;
    is_deleted: boolean;
    deteted_at: Date | null;
}

export interface AddProductData {
    title: string;
    description: string;
    price: number;
    quantity: number;
}
