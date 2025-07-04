import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


// This is the root layout of the Next.js application.
// It sets up the global styles and font imports.
// The `metadata` object contains the title and description of the application.
//Metadata is used to provide information about the application, such as the title and description.
// The `RootLayout` component wraps the entire application and applies the global styles and fonts.
// The `children` prop is used to render the content of the application.
//Prop can be explained as a way to pass data from a parent component to a child component.
// In this case, the `children` prop contains the content of the application that will be rendered inside the `body` tag.
// The `html` tag sets the language of the document to English.
// The `body` tag applies the Geist Sans and Geist Mono fonts to the entire application.
// The `antialiased` class is used to apply antialiasing to the text for better readability.
// The `RootLayout` component is exported as the default export of the module.
// This allows Next.js to use it as the root layout for the application.
// The `globals.css` file is imported to apply global styles to the application.
// The `geistSans` and `geistMono` variables are used to apply the Geist Sans and Geist Mono fonts to the application.
// The `variable` property in the font imports allows the fonts to be used as CSS variables.
// The `subsets` property specifies the character subsets to include in the font.
// The `metadata` object is used to set the title and description of the application.
// The `title` property sets the title of the application, which is displayed in the browser tab.
// The `description` property sets the description of the application, which is used for SEO purposes.