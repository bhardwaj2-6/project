import { create } from 'zustand';
import { AuthState, LoginCredentials, User } from '../types/auth';

// Mock users for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@college.edu',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin' as const,
  },
  {
    id: '2',
    email: 'user@college.edu',
    password: 'user123',
    name: 'Regular User',
    role: 'user' as const,
  },
];

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials: LoginCredentials) => {
    const user = MOCK_USERS.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;
    set({ user: userWithoutPassword, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));