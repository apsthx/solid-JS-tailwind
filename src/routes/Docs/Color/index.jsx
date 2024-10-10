import { onMount } from "solid-js";

export default function Color(){
    onMount(async () => {
        const module = await import("../../../assets/libs/prismjs/prism.js");
    
        module.initializePrism();
      });
    return (
        <>
                <div class="container-fluid mt-4">
          <div class="mt-1">
            <h4 class="mb-4 pb-2 fs-5">Color</h4>
            <div class="mt-4 card">
              <div class="card-body">
                <h4 class="card-title">1. Override Colors</h4>
                <h5 class="card-subtitle mt-2 text-muted mb-4">
                  For any change in colors :
                  <span class="text-dark fw-bold">scss/variable.scss</span>
                </h5>
                <pre style="height: 500px;">
                  <code class="language-css">
                    {`
// colors
$white: #fff !default;
$gray-100: #f6f8fb !default;
$gray-200: #ecf0f2 !default;
$gray-300: #f1f9ff !default;  
$gray-400: #ced4da !default;
$gray-500: #546269 !default;
$gray-600: #6c757d !default;
$gray-700: #4f5467 !default;
$gray-800: #11142d !default;
$gray-900: #223640 !default;
$black: #000 !default;

// Color
$blue: #1a9bfc !default;
$indigo: #6610f2 !default;
$purple: #7460ee !default;
$pink: #e83e8c !default;
$red: #fc4b6c !default;
$orange: #fb8c00 !default;
$yellow: #fdc90f !default;
$green: #39cb7f !default;
$teal: #20c997 !default;
$cyan: #0bb2fb !default;

// Main Colors
$primary: $blue !default;
$secondary: #6c757d !default;
$success: $green !default;
$info: $cyan !default;
$warning: $yellow !default;
$danger: $red !default;
$light: $gray-100 !default;
$muted: #777e89 !default;
$dark: $gray-800 !default;
$dark-light: $gray-800 !default;
$light-gray: $gray-100 !default;
$light-indigo: #ebf3fe;

// light colors
$primary-bg-subtle: #ddebff !default;
$secondary-bg-subtle: #e7e9f0 !default;
$success-bg-subtle: #ebfaf2 !default;
$info-bg-subtle: #e6f4ff !default;
$warning-bg-subtle: #fff4e5 !default;
$danger-bg-subtle: #fdf3f5 !default;
$light-bg-subtle: $gray-100 !default;
$dark-bg-subtle: $gray-800 !default;
`}
                  </code>
              </pre>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}