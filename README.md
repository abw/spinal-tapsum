# Spinal Tapsum

This is a generator of placeholder text in the style of Lorem Ipsum, but
using quotes from the movie "This is Spinal Tap".

It goes up to eleven.  It's one louder.

[Interactive Demo](https://abw.github.io/spinal-tapsum)

## Installation

Clone the repository.

```bash
$ git clone https://github.com/abw/spinal-tapsum.git
$ cd spinal-tapsum
```

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
  -h / --help         This help
  -v / --version      Print version number
  -s / --sequential   Select sequential quotes
  -p / --paras        Wrap each paragraph in <p>...</p>
  -d / --divs         Wrap each paragraph in <div>...</div>
  -l / --lines        Output each paragraph as a single line
```

The `-v` or `--version` option will display the current version.

```
$ bin/spinal-tapsum.js -v
Version 1.0.1
```

The default behaviour is to pick random quotes.  The `-s` or `--sequential`
option can be used to select sequential quotes.

```
$ bin/spinal-tapsum.js -s 3
I'm Lieutenant Bob Hookstratten. Welcome to the Lindberg Air Force base. This
is your gentlemen's first visit to a military facility? Fine, may I start by
saying how thrilled we are to have you here, we are such fans of your music,
and all of your records. I am not speaking of yours personally, but the whole
genre of the rock and roll... of the exiting things that are happening in the
music today.

Let me explain a bit of what's going on. This is our monthly "at-ease
weekend", gives us the chance to kind of let down our hair, although I see
you all have a head start. These haircuts wouldn't pass military muster,
believe me. Although I shouldn't talk I, my hair's getting a little shaggy
too, better not get too close to you, they'll think I'm part of the band, I
am joking, of course. Shall we go in and I'll show you around.

Walk this way, please, right through here. Did you ever run into a musical
group works out of Kansas City call themselves "Four Jacks and a Jill"?
They've been at a Ramada Inn there for about 18 months. If you're ever in
Kansas City and want to hear some good music, you might want to drop by.
```

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

## Library Function

The `quotes()` function implements the functionality to select quotes from
a source text.


```js
import quotes from 'lib/quotes.js'

const text    = "Quote 1\n\nQuote 2\n\nQuote 2\n\n...etc..."
const n       = 3
const options = {
  // any of these options
  //   sequential: true,
  //   lines:      true,
  //   paras:      true,
  //   divs:       true,
}

console.log(
  quotes(text, n, options)
)
```

The first argument, `text`, is the source text you want to extract quotes
from.  Each quote should be separated by two or more newlines.

The second argument, `n` is the number of quotes you want to extract.

The third optional argument is an object containing options.  This can include
any of `sequential`, `lines`, `paras` or `divs` set to `true` to enable that
option.  Note that `paras` and `divs` are mutually exclusive.  You can set
one or the other but not both.

## Author

Andy Wardley, March 2023
