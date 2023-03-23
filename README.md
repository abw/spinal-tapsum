# Spinal Tapsum

This is a generator of placeholder text in the style of Lorem Ipsum, but
using quotes from the movie "This is Spinal Tap".

It goes up to eleven.  It's one louder.

## Installation

Install the dependencies using your favourite package manager.

### npm

```
$ npm install
```

### yarn

```
$ yarn install
```

### pnpm

```
$ pnpm install
```

## Usage

Run the `bin/spinal-tapsum.js` script to generate some sample text.

When run without any arguments it will prompt you to enter the number of
paragraphs you want.

```
$ bin/spinal-tapsum.js
? How many paragraphs? › 3
Now, we here at Polymer we're all looking forward to a long and... and... and
fruitful relationship with Spinal Tap. We wish them great success on their
North American tour and so say all of us... Tap into America!

Excuse me...are you reading "Yes I Can"? By Sammy Davis Jr.? You know what
the title of that book should be? "Yes I Can if Frank Sinatra Says it's
Okay". Cause Frank calls the shots for all of those guys . Did you get to the
part yet where uh... Sammy is coming out of the Copa... it's about 3:00 in
the morning and uh... he sees Frank? Frank's walking down Broadway by
himself...

You know Frank Sinatra it's a different world that they're in. You know, it's
just that people like this, you know, they get all they want so they don't
really understand, you know, about a life like Frank's, I mean, you know when
you've loved and lost the way Frank has, then you, uh, you know what life's
about.
```

You can specify the number of paragraphs as a command line argument.

```
$ bin/spinal-tapsum.js 1
It's like you become one with the guys in the band. I mean there's, there's
no division, you just, the music just unites people, with the players.
```

The `-h` or `-help` option can be used to display the help showing other
options.

```
spinal-tapsum.js

Generate sample text in the style of Lorem Ipsum using Spinal Tap quotes.

Usage:
  spinal-tapsum.js [options] number-of-paragraphs

Options:
  -h / --help     This help
  -v / --version  Print version number
  -p / --paras    Wrap each paragraph in <p>...</p>
  -d / --divs     Wrap each paragraph in <div>...</div>
  -l / --lines    Output each paragraph as a single line
```

The `-v` or `--version` option will display the current version.

The `-p` or `--paras` option will wrap the quotes in `<p>...</p>` elements.

```
$ bin/spinal-tapsum.js -p 1
<p>
  I believe virtually everything I read, and I think that is what makes me more
  of a selective human, than someone who doesn't believe anything.
</p>
```

The `-d` or `--divs` option will wrap the quotes in `<div>...</div>` elements.

```
$ bin/spinal-tapsum.js -d 1
<div>
  Oh, no! I told them once, I told them a hundred times: put "Spinal Tap" first
  and "Puppet show" last. It's a morale builder, isn't it? We've got a big
  dressing room, though. What? Got a big dressing room here... Oh, we've got a
  bigger dressing room than the puppets? Oh, that's refreshing..
</div>
```

The `-l` or `--lines` option removes all the newlines from each paragraph
displaying them as a single line of text.

```
$ bin/spinal-tapsum.js -l 1
He totally ruined the gig, there. He walks off and then you know, he can't be expected to sit home and get money, we've got to get someone else in there.
```

## Author

Andy Wardley, March 2023