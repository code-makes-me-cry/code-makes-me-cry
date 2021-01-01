---
title: 'First steps with the command line'
modified: '2020-12-30T12:30+01:00'
---

The command line (CLI) is one of the first tools you'll pick up along your developer journey, and it'll serve you (I can't see the future, but I reckon) for the whole road ahead.

It's just one part of developer life, but the topic is kind of endless. Once you've gone through this guide, you can safely say you've covered the basics of the CLI, and move onto the next thing. It's normal to pick up new tips and tricks as you use it over time.

Don't worry about memorizing everything. Focus on concepts and vocabulary, so you can look up the details when you need them. Once you start using the CLI day-to-day, it'll become second nature.

## Glossary

- **Graphical user interface / GUI:** A way to interact with your computer using a pointer (clicking, dragging, business as usual)

- **Command line / command line interface / CLI:** A way to interact with your computer by typing commands. Limited pointer interaction (you can scroll and select text, but that's basically it)

- **Terminal / Console / Shell / Command prompt:** Software application where you can type commands

- **Bash:** A popular shell (there are many others, the same way that there are many different word processors and Microsoft Word is one of them)

- **Folder / Directory / dir:** A place on your computer that stores files. A location from where you are running commands.

## Setup

- **Mac or Linux:** You can run commands from your Terminal application.

- **Windows:** Install [Git BASH](https://gitforwindows.org/) to run commands there.

## Get started

- Do the free command line lessons on [Codecademy](https://www.codecademy.com/learn/learn-the-command-line)

- Once you're done learning online, try some commands on your own computer.

- Experiment with this [CLI cheat sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/). The whole thing is worth a read.

After doing the above exercises, you should now be comfortable enough to find more information yourself with some independent googling.

## Memorize this much

- There are two categories of commands:

  - Some of them will **change the system** (e.g. using `cp` to copy a file. These might be dangerous.)
  - Some of them will just **show information** without making a change (e.g. using `ls` to list files in the current dir. These are safe.)

  As you learn new commands, make sure you understand which category they belong to.

- Whenever a guide instructs you to type commands, make sure it's a reliable source that explains what the commands do. There's a risk of running something potentially dangerous, so double check before you hit **Enter**.

- When you read about commands to use, you should ignore the `$` at the start of the line. E.g. if someone says to type `$ pwd`, it just means "In your terminal, type `pwd`". [This discussion](https://stackoverflow.com/questions/19986306/what-does-the-mean-when-running-commands) goes into more detail if this isn't clear.

- As a minimum, you should be familiar with the following commands. You can experiment with these safely, they won't break anything.

  - `$ pwd`
  - `$ cd <path>`
  - `$ ls`
  - `$ ls -Ga1` (try `$ man ls` if that one is confusing)
  - `$ ls -Gal` (yep, that's a different one, look closely)
  - `$ cd ..`
  - `$ cd -`

## How to quit stuff

Sometimes you're not able to type commands in the terminal, and you need to stop what's running before starting something new. You could close and re-open your terminal, but it's easier to type stuff, so get the hang of these:

- You might have a process running (sometimes this appears as a blank box at the bottom of your terminal). A running process can be terminated with the key combination **Ctrl+C**.

- You might be reading information in a terminal program called `less`, which some commands run automatically. You can tell because you'll see a colon `:` at the bottom of the terminal. A common time you might see them is when reading [man pages](https://opensource.com/article/17/7/using-man-pages). You can quit `less` by typing the letter **q**.

## Where to from here?

- The best way to get practice is to have a real reason to: [Go learn Git](https://www.afternerd.com/blog/learn-git/).
