# Angular HttpClient Blob

This is an example application for using Angular's HttpClient "blob" response type.

## Install

First, install dependencies:

<pre><code class="language-bash">$ npm install</code></pre>

Next, run the gulp tasks, then start the Node.js Express server.

<pre><code class="language-bash">$ gulp
$ chmod +x ./dist/bin/www
$ ./dist/bin/www</code></pre>

Then, serve the Angular client using the CLI:

<pre><code class="language-bash">$ ng serve</code></pre>

## Goals

1. Create a simple Express Node.js HTTP server.
2. Mock an image/jpeg image response. This is just hard coded.
3. Create a simple Angular application to display heros.
4. Viewing a hero displays the hero's name and associated image. Again, the image is always the same since I hacked this portion.
5. Show how to retrieve the JPEG image using the HttpClient with the responseType option set to "blob".
6. Show the image from the blob.

## Tutorial

This application is based on a blog post I wrote:

[Angular HttpClient Blob](http://brianflove.com/)

Enjoy! :gift: :tada: