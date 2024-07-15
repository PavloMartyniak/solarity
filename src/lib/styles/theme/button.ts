import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    rounded: "md",
    _hover: {
      cursor: "pointer",
      textDecoration: "none",
    },
    _active: {
      cursor: "pointer",
      textDecoration: "none",
    },
  },

  variants: {
    primary: {
      background: "primary",
      color: "white",
      _disabled: {
        opacity: 1,
        backgroundColor: "gray.2",
        color: "gray.4",
        _hover: {
          cursor: "not-allowed",
          backgroundColor: "gray.2!important",
          color: "gray.4",
        },
      },
      _hover: {
        backgroundColor: "gray.5",
      },
      _active: {
        backgroundColor: "gray.4",
      },
    },

    secondary: {
      background: "transparent",
      color: "primary",
      border: "1px solid",
      borderColor: "primary",
      _disabled: {
        opacity: 1,
        borderColor: "gray.3",
        color: "gray.4",
        _hover: {
          cursor: "not-allowed",
          borderColor: "gray.3",
          color: "gray.4",
        },
      },
      _hover: {
        borderColor: "gray.5",
        color: "gray.5",
      },
      _active: {
        borderColor: "gray.3",
        color: "gray.3",
      },
    },

    link: {
      color: "primary",
      fontWeight: 600,
      textDecoration: "underline",
      _disabled: {
        color: "gray.4",
        opacity: 1,
        _hover: {
          cursor: "not-allowed",
          textDecoration: "underline!important",
          color: "gray.4",
        },
      },
    },

    rounded: {
      width: 8,
      height: 8,
      backgroundColor: "#fff",
      border: "1px solid #F3F4F5",
      rounded: "full",
    },

    toolbar: {
      width: 8,
      height: 8,
      rounded: "full",
      _hover: {
        bg: "gray.2",
      },
    },
  },

  sizes: {
    xs: {
      px: 4,
      fontWeight: 600,
      lineHeight: "1.1rem",
      fontSize: "sm",
      height: "2.125rem",
    },

    sm: {
      px: 4,
      fontWeight: 600,
      lineHeight: "1.1rem",
      fontSize: "sm",
      height: 10,
    },

    md: {
      px: 6,
      fontWeight: 600,
      lineHeight: 5,
      fontSize: "md",
      height: "2.875rem",
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default Button;
