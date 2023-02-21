import { background, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`, 
    body: `'Open Sans', sans-serif` 
  }, 
  colors: {
    brand: {
        veryDark: "#102F27",
        dark: "#226252", 
        medium: "#308771", 
        light: "#E2EFDE", 
        veryLight: "F4F9F2", 
        white: "FBFBFB"
    },
    white: {
        veryDark: "FBFBFB", 
    }, 
  },
  components: {
    Link: {
        variants: {
            "underline": {
            position: "relative",  
            textDecoration: "none", 
            display: "inline-block", 
            _hover: {
                color: "#000", 
                textDecoration: "none", 
                _before: {
                    visibility: "visible", 
                    width: "100%" 
                }
            }, 
            _before: {
                color: "blue", 
                content: '""', 
                position: "absolute", 
                display: "block", 
                width: "0", 
                height: "2px", 
                bottom: "0", 
                left: "0", 
                backgroundColor: "#308771", 
                visibility: "hidden",
                transitionDuration: "0.3s", 
                transitionTimingFunction: "ease"
            }, 
            _hover_before: {
                visibility: "visible", 
                width: "100%" 
            }
        }
        },
        config: {
            disableTransitionOnChange: false
          }
    }, 
    Button: {
        variants: {
          green: {
          background: "#226252", 
          color: "white",
              px: "2rem",
              height: "3.5rem",
              fontSize: "1.25rem",
              borderRadius: '100px',
              _hover: { background: "#308771" },
               _active: {
                bg: 'brand.medium',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            },
        },
      },
    }
  }, 
})
export default theme