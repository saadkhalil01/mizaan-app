import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY } from '../constants/theme';
import { TabParamList } from '../types';

// Screens
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import SpiritScreen from '../screens/Spirit/SpiritScreen';
import BodyScreen from '../screens/Body/BodyScreen';
import MindScreen from '../screens/Mind/MindScreen';
import WealthScreen from '../screens/Wealth/WealthScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.surface,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.textMuted,
                tabBarLabelStyle: {
                    ...TYPOGRAPHY.small,
                    fontWeight: '600',
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Spirit"
                component={SpiritScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="moon" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Body"
                component={BodyScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="fitness" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Mind"
                component={MindScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bulb" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wealth"
                component={WealthScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trending-up" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="stats-chart" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
