# Next.js with Chakra UI
Based on course: [Build a Modern User Interface with Chakra UI](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)

## Notes
### Bundle size
Even though the UI library is indeed very nice, the app bundle size is 151 KB. While the library itself is relatively small, the Framer Motion package for animations takes somewhere about 30 KB.

```
Page                             Size     First Load JS
┌ ○ / (1921 ms)                  43.5 kB         151 kB
├   /_app                        0 B             108 kB
└ ○ /404                         194 B           108 kB
+ First Load JS shared by all    108 kB
  ├ chunks/framework.b97a0e.js   42 kB
  ├ chunks/main.62b8ca.js        23.3 kB
  ├ chunks/pages/_app.e6f760.js  41.7 kB
  └ chunks/webpack.0e3c27.js     883 B
  ```
