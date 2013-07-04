# grunt-init-helper

> Quickly create helpers for use with Assemble, using [grunt-init][]. Includes README documentation, test files, metadata, bower.json and package.json.


## Installation
If you haven't already done so, install [Grunt][grunt] and [grunt-init][]: 

``` bash
npm i -g grunt-cli grunt-init
```

Once [grunt-init][] is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

``` bash
git clone https://github.com/assemble/grunt-init-helper.git ~/.grunt-init/helper
```

**Note** that you may make the template available as any name you choose by simply changing the name of the folder in which the template is stored. So instead of `~/.grunt-init/helper`, you may change the name to `~/.grunt-init/foo` so that this template is available to be used with the following command: `grunt-init foo`.


## Usage
Once `grunt init` is intalled, navigate to the directory where you want the helper to be generated and then:

1. At the command-line run `grunt-init helper`
2. Enter a name for the helper at the first prompt

This will generate a helper with example code that can be modified or removed.

_Note that no warning will be issued if you create a helper with the same name as an existing helper, in which case the existing helper of the same name will be overwritten._


## Related info

* [grunt-init-assemble](https://github.com/assemble/grunt-init-assemble)
* [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
* [Assemble's documentation](http://assemble.io)
* [assemble-less](https://github.com/assemble/assemble-less)
* [assemble-examples](https://github.com/assemble/assemble-examples)

[grunt]: http://gruntjs.com
[grunt-init]: http://gruntjs.com/project-scaffolding#installing-templates

