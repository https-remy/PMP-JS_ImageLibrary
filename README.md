# Infinite Scroll Image Loader

A web application that implements **infinite scrolling** to load images from an API as the user scrolls down the page. Built using **HTML**, **CSS**, and **JavaScript**. The project practices using the `IntersectionObserver` for triggering new data loads based on scroll position.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributors](#contributors)

## Introduction

This project dynamically loads images as you scroll, giving a seamless infinite scroll experience. It uses the `IntersectionObserver` API to monitor the scroll position and fetches new images from an external API when the user nears the bottom of the page.

## Features

- **Infinite scrolling**: Loads more images as the user scrolls down.
- **Image fetching from an API**: Retrieves images dynamically.
- **IntersectionObserver API**: Efficient scroll event handling.
- **Responsive layout**: Adapts to different screen sizes.

## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/remyShift/infinite-scroll.git
   ```

2. Navigate to the project folder:

   ```bash
   cd infinite-scroll
   ```

3. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

## Usage

- Scroll down the page to load more images.
- New images are fetched automatically once you reach the bottom of the page.

## Technologies Used

- **HTML5**: For structuring the page.
- **CSS3**: For styling the layout and making it responsive.
- **JavaScript**: To handle the scrolling and data fetching logic.
- **IntersectionObserver API**: For detecting when the user is about to reach the bottom of the page.

## Project Structure

```bash
infinite-scroll/
├── index.html      # Main HTML file
├── style.css       # CSS file for layout and design
├── script.js       # JavaScript file for observer and API calls
└── README.md       # Project documentation
```

## Customization

- You can change the image source API in `script.js` to fetch different types of images.
- Modify `style.css` to adjust the layout or add new design elements.

## Contributors

- [remyShift](https://github.com/remyShift) - Creator and Developer
