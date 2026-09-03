# Marketing Analytics Dashboard

A full-stack web application for analyzing advertising campaign performance, lead data, and key marketing metrics.

The dashboard combines advertising statistics with lead data and provides tools for filtering, comparing periods, tracking KPIs, and manually adding missed leads.

> 🚧 The project is currently under active development.

## Features

Currently implemented:

* Advertising campaign performance analytics
* KPI calculation and visualization
* Filtering by region
* Filtering by advertising campaign
* Custom date range selection
* Period-to-period comparison
* Marketing data table
* Manual lead creation
* Dynamic recalculation of dashboard metrics
* Modal-based interface for adding lead data
* Separation of business logic into reusable hooks and utilities

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* SCSS
* Mantine UI
* Day.js

### Backend & Data

* Node.js
* Express
* PostgreSQL
* Prisma ORM

### Development & Testing

* Vitest
* ESLint
* Git

## Project Structure

```text
src/
├── components/   reusable UI components
├── constants/    shared dashboard constants
├── data/         application data
├── hooks/        reusable React hooks and business logic
├── services/     data and API services
├── styles/       shared styles
├── types/        TypeScript types and interfaces
└── utils/        helper functions
```

## Application Logic

The project uses custom React hooks to separate UI and business logic.

Examples:

* `useDateRange` — manages the selected reporting period
* `useComparisonPeriod` — manages comparison periods and presets
* `useDashboardData` — prepares filtered data and calculates dashboard metrics

## Dashboard Functionality

### Filters

Dashboard data can be filtered by:

* Date range
* Region
* Advertising campaign

### Period Comparison

The dashboard supports comparison between the selected reporting period and another custom or predefined period.

KPI values are recalculated for both periods to make performance changes easier to analyze.

### KPI Metrics

The application calculates marketing indicators based on the currently selected filters and reporting period.

### Lead Management

Missed leads can be manually added through a modal form.

After a lead is created, the dashboard data is updated and recalculated.

## Project Status

The project is currently under active development.

Planned improvements include:

* completing backend and database integration
* expanding TypeScript usage
* improving test coverage
* refining application architecture
* improving dashboard UX
* adding additional analytics features
* production deployment
