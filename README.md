<div align="center">
  <a href="https://github.com/jeffsc/jeffsc.com.br">
    <img src="public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Jeffsc Portfolio</h3>

  <p align="center">
    A high-performance personal portfolio showcasing a modern web stack.
    <br />
    <a href="https://github.com/jeffsc/jeffsc.com.br"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="www.jeffsc.com.br">View Site</a>
    ·
    <a href="https://github.com/jeffsc/jeffsc.com.br/issues">Report Bug</a>
  </p>
</div>

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Preact](https://img.shields.io/badge/Preact-673AB8?style=for-the-badge&logo=preact&logoColor=white)](https://preactjs.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project is a complete overhaul of my personal portfolio, redesigned from a traditional SPA to a modern, high-performance static site using Astro. It leverages partial hydration to ensure that only interactive components ship JavaScript to the browser, resulting in lightning-fast load times.

### Built With

* [![Astro][Astro-badge]][Astro-url]
* [![Preact][Preact-badge]][Preact-url]
* [![Tailwind][Tailwind-badge]][Tailwind-url]

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* pnpm
  ```sh
  npm install -g pnpm
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jeffsc/jeffsc.com.br.git
   ```
2. Install PNPM packages
   ```sh
   pnpm install
   ```
3. Start the development server
   ```sh
   pnpm dev
   ```

## Usage

The portfolio is structured around a single source of truth for content.
* **Content:** All text and data are managed in `src/data/portfolio.ts`.
* **Theming:** Colors and tokens are defined in `src/styles/global.css` and consumed by Tailwind.

To build the static output:
```bash
pnpm build
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

* [Astro Documentation](https://docs.astro.build)

[Astro-badge]: https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/
[Preact-badge]: https://img.shields.io/badge/Preact-673AB8?style=for-the-badge&logo=preact&logoColor=white
[Preact-url]: https://preactjs.com/
[Tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
