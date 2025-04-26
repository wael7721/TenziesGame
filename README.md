# Tenzies Game - "Learn React"Capstone Project

## Project Overview:
As part of the final project for the "Learn React" course, I created a **Tenzies game**, a popular dice game where the goal is to roll dice and keep as many as possible locked in place until all ten dice show the same number. The player rolls all the dice at once and tries to match the numbers with the goal of minimizing the number of rolls required to win.

In this project, I applied my knowledge of React to build an interactive, responsive, and fun game, featuring key concepts such as **state management**, **component structure**, and **event handling**. It also utilizes **React hooks** (like `useState` and `useEffect`) and **CSS for styling** to create a dynamic user experience.

## Key Features:
- **Interactive Dice Rolls**: The game consists of 10 dice, each represented by a die component. Players can click on each die to lock it in place, and they can continue rolling the unlocked dice to match the number of the locked dice.
- **Game Logic**: The game automatically checks if all dice are the same, and when they are, it displays a win message. The player can reset the game to start over.
- **State Management**: I used **React hooks** to manage the state of each die (locked/unlocked), the current values of the dice, and the number of rolls taken. The application updates efficiently when the state changes.
- **Styling**: The game is styled using **CSS**, providing a clean and simple interface. Dice are styled as buttons, and the game has a modern look with visually appealing colors.
- **Start New Game**: A button that allows players to restart the game with fresh dice.

## Technologies Used:
- **React**: Built the entire game using React functional components and hooks for state and effects.
- **CSS**: Used plain CSS for styling the app and making it responsive.
- **JavaScript**: Leveraged JavaScript for game logic and random dice generation.

## Project Structure:
1. **App Component**: The main container that holds the game logic and renders the dice.
2. **Die Component**: A single die that can be clicked to lock it in place or release it.
3. **Game Logic**: Functions to roll dice, check for a win condition, and reset the game state.
4. **Styling**: The project uses a responsive design with clear, minimalist styling focused on usability.

## How to Play Tenzies:
1. When the game starts, all dice are rolled and displayed randomly.
2. Click on a die to lock it in place. The locked dice will not roll again in subsequent turns.
3. Roll the unlocked dice until all dice display the same number.
4. Once all dice match, the game is won! Click the "New Game" button to restart.

## Challenges Faced:
- Managing the state of each individual die and handling multiple rolls efficiently using React hooks.
- Implementing the win condition logic and ensuring the game resets properly.
- Ensuring that the app re-renders efficiently and optimally when game states change.

## Future Improvements:
- Add a timer to track how long it takes to complete the game.
- Enhance the user interface with animations (e.g., dice rolling effect) using CSS transitions.
- Implement local storage to save the game progress and allow players to continue where they left off.

## GitHub Repository Link:
https://github.com/wael7721/TenziesGame
