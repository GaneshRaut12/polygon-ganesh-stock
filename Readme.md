# Stock Market Dashboard

A simple web application to display the top 20 gainers in the stock market with live price updates. The project is divided into frontend (React) and backend (Node.js) components.

## Features

- Real-time updates of stock prices using WebSocket.
- Display of top 20 gainers with their open and current prices.

## Technologies Used

- Frontend: React
- Backend: Node.js (Express)
- WebSocket: `ws` library for WebSocket communication

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/stock-market-dashboard.git
    ```

2. Navigate to the project directory:

    ```bash
    cd stock-market-dashboard
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

### Configuration

1. Create a `.env` file in the `backend` directory and add your Polygon API key:

    ```env
    API_KEY=your_polygon_api_key
    ```

    Replace `your_polygon_api_key` with your actual Polygon API key.

### Usage

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend:

    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to view the Stock Market Dashboard.

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
