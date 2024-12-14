# EmergingTech :  Trigram Text Model and Analysis

## Table of Contents 
1. [Introduction](#introduction)
2. [How to Run](#how-to-run)
3. [Implementaion Details](#implementation-details)
4. [References](#references)

   
## Introduction
For this project I set up a trigram modle to explore its use in text modeling and generation, trigram modles analyze sequences of three consecutive characters to predict the likelihood of the next character in a sequence. I was tasked with building a trigram-based text model using any 5 texts from project gutenberg. From doing the project I was able to notice the potential use of trigrams for generating legable text as well as analyzing specific details in large scale text documents.

## How to Run
- First clone the repository to your machine.
- Locate the files needed.
- Open and run the Jupyter Notebook: jupyter notebook trigrams.ipynb.
- Run the code cell by cell or all at once.
- Or
- Use github codespaces to run it.

## Implementaion Details 
### Step 1
- First step was to clean up and prepare for the text by removing all unwanted charecters and formatting before making the trigram.
- Removed all charecters except letters (A-Z, a-z), spaces, and full stops using regular expressions.
- Convert all letters to an uppercase for consitency.
- Books used: Cthulhu.txt, Dracula.txt, Frankenstein.txt, Mobydick.txt, Sherlock.txt.
### Step 2
- Step 2 is to generate a directory of trigrams from the cleaned up text.
- Loops through the cleaned text and expreacrs all squences of 3 consecative
### Step 3
- Step 3 was to generate a new squence of text using the trigram model.
- Find all trigrams in the model that begin with the last two characters of the current text.
- Select the next charecter based on the trigram, selects the next charecter at random from this.
- Does this process until 10,000 charecters is reached.
### Step 4
- Step 4 is to analyze the generated text to figure out how many words are valid English words.
- I first split the text into individual words.
- Used word.txt to compare each word.
- Then I made it count the total of valid words and their % relative to the total word count.
### Step 5
- Step 5 is the final step and it is to save the trigram model into a JSON format.
- First was to tranlsate it to JSON format using the json libaray.
- Saved it with readable format to trigram.json in the repo.

## References
