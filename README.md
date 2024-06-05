# Ecom Price Tracking Application

## Overview

This repository contains the code for an E-commerce price tracking application built with Next.js, Tailwind CSS, and MongoDB. The project aims to help users track price changes for products and get notifications when prices drop or products are back in stock.

## Tech Stack

- **Next.js**
- **Tailwind CSS**
- **MongoDB**
- **Cheerio**
- **Nodemailer**

## Features

- **Product Scraping**: Input product links for scraping details.
- **Email Notifications**: Receive alerts for price drops and stock updates.
- **Automated Cron Jobs**: Keep data updated with scheduled scraping.

## Quick Start

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the Repository**

```bash
git clone https://github.com/adrianhajdin/pricewise.git
cd pricewise
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the project root with the following content:

```env
#SCRAPER
BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

#DB
MONGODB_URI=

#OUTLOOK
EMAIL_USER=
EMAIL_PASS=
```

Replace the placeholder values with your actual credentials.

4. **Run the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
