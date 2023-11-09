# Belly Button Biodiversity Dashboard

## Project Overview
The Belly Button Biodiversity Dashboard is an interactive web application designed to explore and visualize the Belly Button Biodiversity Dataset, which catalogs the microbes that colonize human navels. The study highlights a small number of microbial species present in the majority, while others are rarer.

## Features
- **Top OTUs Bar Chart**: Displays the top 10 OTUs found in the selected individual with dynamic updates.
- **Bubble Chart**: Visualizes each sample's OTUs with varying marker sizes and colors.
- **Demographic Information**: Shows detailed demographic data of the study participants.
- **Washing Frequency Gauge**: Illustrates the belly button washing frequency as a gauge chart.

## Technologies
- **D3.js**: For fetching and manipulating the dataset.
- **Plotly.js**: For building the interactive charts.
- **Bootstrap**: For responsive layout and styling.

## File Structure
- `index.html`: The entry point of the dashboard.
- `/static/js/app.js`: The main JavaScript file containing the logic for initial rendering and dynamic updates of the visualizations.
- `/static/js/bonus.js`: Contains additional visualization logic, specifically for the gauge chart.

## Installation
To run this dashboard locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/data-analyst05/belly_button_js.git
