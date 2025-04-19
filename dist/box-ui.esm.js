import React, { isValidElement, cloneElement } from 'react';
import classNames from 'classnames';
import { Pagination } from 'react-headless-pagination';
import { FiArrowLeft, FiArrowRight, FiChevronDown, FiCheck, FiLogOut, FiSearch, FiHome, FiLayers, FiSettings, FiFlag, FiMapPin, FiCheckSquare, FiBarChart2, FiCircle, FiList, FiGrid } from 'react-icons/fi';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const BadgeSizeClasses = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg"
};
const BadgeVariantClasses = {
  gray: "badge-gray",
  primary: "badge-primary",
  warning: "badge-warning",
  error: "badge-error",
  success: "badge-success"
};
const Badge = _ref => {
  let {
    className,
    children,
    LeadingIcon,
    TrailingIcon,
    variant,
    size
  } = _ref;
  const badgeVariantClassName = BadgeVariantClasses[variant];
  const badgeSizeClassName = BadgeSizeClasses[size];
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("badge-base", badgeSizeClassName, badgeVariantClassName, className)
  }, LeadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "mr-1.5"
  }, LeadingIcon), children, TrailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "mr-1.5"
  }, TrailingIcon));
};

const buttonVariantClasses = {
  primary: {
    default: "btn-primary",
    hover: "btn-primary-hover",
    focus: "btn-primary-focus shadow-grayDark",
    disabled: "btn-primary-disabled"
  },
  secondary: {
    default: "btn-secondary",
    hover: "btn-secondary-hover",
    focus: "btn-secondary-focus shadow-grayDark",
    disabled: "btn-secondary-disabled"
  },
  secondaryGray: {
    default: "btn-secondaryGray",
    hover: "btn-secondaryGray-hover",
    focus: "btn-secondaryGray-focus shadow-grayDark",
    disabled: "btn-secondaryGray-disabled"
  },
  tertiary: {
    default: "btn-tertiary",
    hover: "btn-tertiary-hover",
    focus: "btn-tertiary-focus shadow-grayDark",
    disabled: "btn-tertiary-disabled"
  },
  tertiaryGray: {
    default: "btn-tertiaryGray",
    hover: "btn-tertiaryGray-hover",
    focus: "btn-tertiaryGray-focus shadow-grayDark",
    disabled: "btn-tertiaryGray-disabled"
  }
};
const buttonSizeClasses = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
  "2xl": "btn-2xl"
};
const buttonIconSizeClasses = {
  sm: "btn-icon-sm",
  md: "btn-icon-md",
  lg: "btn-icon-lg",
  xl: "btn-icon-xl",
  "2xl": "btn-icon-2xl"
};
const Button = _ref => {
  let {
    children,
    className,
    variant = "primary",
    size = "md",
    disabled,
    LeadingIcon,
    TrailingIcon,
    IconOnly,
    ...buttonProps
  } = _ref;
  const buttonVariantClassName = buttonVariantClasses[variant];
  const buttonIconSizeClassName = buttonIconSizeClasses[size];
  const setIconSize = (icon, iconSize) => {
    if (/*#__PURE__*/isValidElement(icon) && "size" in icon.props) {
      return /*#__PURE__*/cloneElement(icon, {
        size: 20
      });
    }
    return icon;
  };
  const setClassName = (icon, additionalClass) => {
    return /*#__PURE__*/isValidElement(icon) ? /*#__PURE__*/cloneElement(icon, {
      className: classNames(icon.props.className, additionalClass)
    }) : icon;
  };
  return /*#__PURE__*/React.createElement("button", Object.assign({
    type: "button",
    className: classNames("btn-base", className, {
      [buttonSizeClasses[size]]: !IconOnly,
      [classNames(buttonIconSizeClassName, "justify-center")]: IconOnly,
      [classNames(buttonVariantClassName.default, buttonVariantClassName.hover, buttonVariantClassName.focus)]: !disabled,
      [classNames(buttonVariantClassName.disabled, "cursor-not-allowed")]: disabled
    })
  }, buttonProps), LeadingIcon && (/*#__PURE__*/React.createElement("span", null, setClassName(LeadingIcon, classNames({
    "mr-2": size !== "2xl",
    "mr-3": size === "2xl"
  })))), children, IconOnly && (/*#__PURE__*/React.createElement("span", null, setIconSize(IconOnly))), TrailingIcon && (/*#__PURE__*/React.createElement("span", null, setClassName(TrailingIcon, classNames({
    "ml-2": size !== "2xl",
    "ml-3": size === "2xl"
  })))));
};

const ButtonGroup = _ref => {
  let {
    options,
    activeOption,
    setActiveOption
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, options.map((option, index) => (/*#__PURE__*/React.createElement("button", {
    key: option.value,
    className: classNames("inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-center text-sm focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500", {
      "rounded-l-lg": index === 0,
      "rounded-r-lg": index === options.length - 1,
      "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
      "border-r-0": index !== 0 && index !== options.length - 1
    }),
    onClick: () => setActiveOption(option.value)
  }, option.content))));
};

const ColorBox = _ref => {
  let {
    code,
    hex,
    bgClass
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    key: bgClass,
    className: "flex flex-col rounded-lg shadow-lg w-26 h-39 dark:bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: `h-20 ${bgClass} rounded-t-lg`
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-3 my-3"
  }, code, /*#__PURE__*/React.createElement("br", null), hex));
};

const Paginate = _ref => {
  let {
    totalPages,
    page,
    isMobile,
    className,
    setPage
  } = _ref;
  const handlePageChange = page => {
    setPage(page);
  };
  const ArrowLeft = FiArrowLeft;
  const ArrowRight = FiArrowRight;
  if (isMobile) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames("flex w-full h-10 items-center", className)
    }, /*#__PURE__*/React.createElement(ArrowLeft, {
      size: 20,
      className: classNames("mr-3 text-gray-500 dark:text-white", {
        "cursor-pointer": page !== 0,
        "opacity-50": page === 0
      }),
      onClick: () => {
        if (page > 0) {
          handlePageChange(page - 1);
        }
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white"
    }, `Page ${page} of ${totalPages}`), /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20,
      className: classNames("ml-3 text-gray-500 dark:text-white", {
        "cursor-pointer": page !== totalPages - 1,
        "opacity-50": page === totalPages - 1
      }),
      onClick: () => {
        if (page < totalPages - 1) {
          handlePageChange(page + 1);
        }
      }
    }));
  }
  return /*#__PURE__*/React.createElement(Pagination, {
    className: classNames("flex w-full items-center h-10 text-sm select-none", className),
    currentPage: page,
    totalPages: totalPages,
    edgePageCount: 2,
    setCurrentPage: handlePageChange,
    truncableText: "...",
    middlePagesSiblingCount: 2,
    truncableClassName: "w-10 px-0.5 text-center dark:text-gray-500"
  }, /*#__PURE__*/React.createElement(Pagination.PrevButton, {
    className: classNames("h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none", {
      "cursor-pointer": page !== 0,
      "opacity-50": page === 0
    }),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 20,
    className: classNames("mr-3")
  }), "Previous"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center flex-grow list-none"
  }, /*#__PURE__*/React.createElement(Pagination.PageButton, {
    activeClassName: "bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white",
    inactiveClassName: "text-gray-500",
    className: "flex items-center justify-center h-10 w-10 rounded-full cursor-pointer font-medium"
  })), /*#__PURE__*/React.createElement(Pagination.NextButton, {
    className: classNames("h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none", {
      "cursor-pointer": page !== totalPages - 1,
      "opacity-50": page === totalPages - 1
    })
  }, "Next", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 20,
    className: classNames("ml-3")
  })));
};

const Select = _ref => {
  let {
    options,
    selectedOption,
    setSelectedOption,
    placeholder,
    LeadingIcon,
    width
  } = _ref;
  const ArrowDown = FiChevronDown;
  const Check = FiCheck;
  const setProps = (icon, iconSize, additionalClass) => {
    if (/*#__PURE__*/isValidElement(icon) && "size" in icon.props) {
      return /*#__PURE__*/cloneElement(icon, {
        size: iconSize,
        className: classNames(icon.props.className, additionalClass)
      });
    }
    return icon;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("relative inline-block", width)
  }, /*#__PURE__*/React.createElement(Listbox, {
    value: selectedOption && selectedOption.value,
    onChange: setSelectedOption
  }, _ref2 => {
    let {
      open
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListboxButton, {
      className: classNames("shadow-sm flex items-center text-md border border-gray-300 dark:border-gray-500 h-11 px-3.5 rounded-lg bg-white dark:bg-gray-800", "focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20 whitespace-nowrap", {
        "text-gray-900 dark:text-white": selectedOption,
        "text-gray-500 dark:text-gray-300": !selectedOption
      }, width)
    }, LeadingIcon && (/*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 mr-2 overflow-hidden",
      "data-testid": "leading-icon"
    }, setProps(LeadingIcon, 20, classNames("text-gray-400")))), selectedOption ? selectedOption.label : placeholder, /*#__PURE__*/React.createElement(ArrowDown, {
      size: 20,
      className: classNames("text-gray-500 dark:text-gray-300 transform duration-100 ease-out", {
        "-rotate-180": open,
        "ml-auto": width,
        "ml-3.5": !width
      })
    })), /*#__PURE__*/React.createElement(ListboxOptions, {
      className: "absolute z-10 inline-flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg top-13 dark:border-gray-500 dark:bg-gray-800"
    }, options === null || options === void 0 ? void 0 : options.map((option, index) => (/*#__PURE__*/React.createElement(ListboxOption, {
      as: React.Fragment,
      key: option.value,
      value: option.value
    }, _ref3 => {
      let {
        focus,
        selected
      } = _ref3;
      return /*#__PURE__*/React.createElement("li", {
        className: classNames(classNames("flex items-center pl-3.5 pr-3 justify-between h-11 text-gray-900 dark:text-white text-md cursor-pointer hover:bg-primary-25 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 whitespace-nowrap", {
          "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10": focus,
          "rounded-t-lg": index === 0,
          "rounded-b-lg": index === options.length - 1
        }))
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, option.label), selected && /*#__PURE__*/React.createElement(Check, {
        className: "ml-5 text-primary-600 dark:text-white"
      }));
    })))));
  }));
};

const TypographyVariantClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1"
};
const TypographyWeightClasses = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};
const Typography = _ref => {
  let {
    variant = "md",
    customWeight = "regular",
    customColor,
    className,
    children
  } = _ref;
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[customWeight];
  const Component = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant ?? "p") ? variant : "p";
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames(TypographyVariantClassName, TypographyWeightClassName, className, {
      "tracking-tight": ["h1", "h2", "h3"].includes(variant),
      "text-black dark:text-white": !customColor
    }, customColor)
  }, children);
};

const useIconClassName = () => {
  const setClassName = (icon, additionalClass) => {
    return /*#__PURE__*/isValidElement(icon) ? /*#__PURE__*/cloneElement(icon, {
      className: classNames(icon.props.className, additionalClass)
    }) : icon;
  };
  return {
    setClassName
  };
};

const TextInput = _ref => {
  let {
    type,
    value,
    label,
    placeholder,
    error,
    helperText,
    disabled,
    LeadingIcon,
    TrailingIcon,
    leadingText,
    handleChange
  } = _ref;
  const {
    setClassName
  } = useIconClassName();
  const inputId = `textinput-${(label === null || label === void 0 ? void 0 : label.toLowerCase().replace(/\s+/g, '-')) || 'input'}`;
  return /*#__PURE__*/React.createElement("div", null, label && (/*#__PURE__*/React.createElement("label", {
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "sm",
    customWeight: "medium",
    customColor: "text-gray-700 dark:text-white",
    className: "mb-1.5"
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: classNames("relative", {
      "flex items-center": leadingText
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-11 absolute shadow-sm rounded-lg w-full flex justify-between items-center px-3.5 pointer-events-none"
  }, LeadingIcon ? setClassName(LeadingIcon, "text-gray-500") : /*#__PURE__*/React.createElement("div", null), TrailingIcon && setClassName(TrailingIcon, classNames({
    "text-error-500": error,
    "text-gray-400": !error
  }))), leadingText && (/*#__PURE__*/React.createElement(Typography, {
    variant: "sm",
    customWeight: "regular",
    className: classNames("flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500", {
      "bg-gray-50 dark:bg-gray-700": disabled,
      "dark:bg-gray-800": !disabled
    })
  }, leadingText)), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: handleChange,
    disabled: disabled,
    className: classNames("w-full select-none text-gray-900 dark:text-white text-md border h-11 px-2", {
      "pl-9": LeadingIcon,
      "pr-9": TrailingIcon,
      "rounded-l-0 rounded-r-lg": leadingText,
      "rounded-lg": !leadingText,
      "border-gray-300 dark:border-gray-500 focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20": !error,
      "border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100": error,
      "bg-white dark:bg-gray-800": !disabled,
      "bg-gray-50 dark:bg-gray-700": disabled
    })
  })), error && (/*#__PURE__*/React.createElement("label", {
    className: "text-sm font-normal mt-1.5 text-error-500"
  }, error)), helperText && (/*#__PURE__*/React.createElement("label", {
    className: "text-sm font-normal mt-1.5 text-gray-500"
  }, helperText)));
};

const SubNavItem = _ref => {
  let {
    inDropdown,
    isActive,
    subItem,
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement("li", {
    key: subItem.label,
    className: classNames("navItem group", {
      "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive
    }),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "md",
    customWeight: "medium",
    customColor: classNames("group-hover:text-primary-600 dark:group-hover:text-white", {
      "text-gray-800 dark:text-white": !isActive,
      "text-primary-600 dark:text-white": isActive
    }),
    className: classNames("flex-grow", {
      "pl-13": !inDropdown,
      "pl-4": inDropdown
    })
  }, subItem.label));
};

const useIconProps = () => {
  const setProps = (icon, iconSize, additionalClass) => {
    return /*#__PURE__*/isValidElement(icon) ? /*#__PURE__*/cloneElement(icon, {
      size: iconSize,
      className: classNames(icon.props.className, additionalClass)
    }) : icon;
  };
  return {
    setProps
  };
};

const NavItem = _ref => {
  let {
    item,
    isActive,
    activeSubNavItem,
    open,
    openDropdown,
    onClick
  } = _ref;
  const {
    setProps
  } = useIconProps();
  const ArrowDown = FiChevronDown;
  return /*#__PURE__*/React.createElement(Popover, {
    key: item.label,
    className: "relative"
  }, /*#__PURE__*/React.createElement(PopoverButton, {
    as: React.Fragment
  }, /*#__PURE__*/React.createElement("li", {
    className: classNames("navItem group", {
      "px-4": open,
      "ml-2 px-2 w-10": !open,
      "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive
    }),
    onClick: () => onClick(item)
  }, setProps(item.icon, 24, classNames("group-hover:text-primary-600 dark:group-hover:text-white dark:text-white transform duration-100 ease-out", {
    "-rotate-180": item.toggleSidebar && !open,
    "text-gray-900": !isActive,
    "text-primary-600 dark:text-white": isActive
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "md",
    customWeight: "medium",
    className: classNames("flex-grow ml-3", {
      "opacity-0 hidden": !open
    }),
    customColor: classNames("group-hover:text-primary-600 dark:group-hover:text-white", {
      "text-gray-800 dark:text-white": !isActive,
      "text-primary-600 dark:text-white": isActive
    })
  }, item.label), item.subItems && item.subItems.length > 0 ? (/*#__PURE__*/React.createElement(ArrowDown, {
    size: 20,
    className: classNames("group-hover:text-primary-600 dark:group-hover:text-white transform duration-100 ease-out", {
      "opacity-0 hidden": !open,
      "text-gray-400": !isActive,
      "text-primary-600 dark:text-white": isActive,
      "-rotate-180": openDropdown
    })
  })) : null))), openDropdown && open && item.subItems && item.subItems.length > 0 ? (/*#__PURE__*/React.createElement("div", {
    className: "my-2 space-y-1"
  }, item.subItems.map(subItem => (/*#__PURE__*/React.createElement(SubNavItem, {
    key: subItem.label,
    isActive: activeSubNavItem === subItem.label,
    subItem: subItem,
    onClick: () => onClick(item, subItem.label)
  }))))) : null, !open && item.subItems && item.subItems.length > 0 ? (/*#__PURE__*/React.createElement(PopoverPanel, {
    className: "absolute z-50 px-4 py-3 ml-5 space-y-1 bg-white rounded-lg shadow-md -top-3 left-19 w-58 dark:bg-gray-900"
  }, item.subItems.map(subItem => (/*#__PURE__*/React.createElement(SubNavItem, {
    key: subItem.label,
    inDropdown: true,
    isActive: activeSubNavItem === subItem.label,
    subItem: subItem,
    onClick: () => onClick(item, subItem.label)
  }))))) : null);
};

// Development images
// const devImages: Record<image, string> = {
// logo: require("./logo.png"),
//   IN: require("./in.svg"),
//   BE: require("./be.svg"),
//   DE: require("./de.svg"),
//   FR: require("./fr.svg"),
//   IT: require("./it.svg"),
//   NL: require("./nl.svg"),
//   RU: require("./ru.svg"),
//   US: require("./us.svg"),
// };
// Production images (CDN)
const prodImages = {
  logo: "https://media-hosting.imagekit.io/0ec1ca8b900e4e8b/logo.svg?Expires=1838348369&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pCHsmoIdugCAGgRQuivkSFGORbcd0DMZjw-l9LQlxqEs77-19RpmN8TrGsMdYdKwLic46nDsKt44NPaRyu~mxJDKX7I0acu5x53nLqrjh-fs6s8VATv5eHASNeV83rLF3LXgXwMkXubchLy79xPaEHKlRlvJgcqrjZd3cE4C8QXC0KIG4dSjtkd0rECwtweKFuh1BrJIwcKIxiu5cEJUKgDvi4TUS22KVFh4c52c9CjBGa0ulrxxyZHMj2eXff-uQBkecyW-QYillwmsuz2i5PFf6Ud~9JZ2xYOBWwrq4VRSY-8p~c6Czqagg-w6gqyk-3xEM-f-cDfor~11~xwtTg__",
  IN: "https://kapowaz.github.io/circle-flags/flags/in.svg",
  BE: "https://kapowaz.github.io/circle-flags/flags/be.svg",
  DE: "https://kapowaz.github.io/circle-flags/flags/de.svg",
  FR: "https://kapowaz.github.io/circle-flags/flags/fr.svg",
  IT: "https://kapowaz.github.io/circle-flags/flags/it.svg",
  NL: "https://kapowaz.github.io/circle-flags/flags/nl.svg",
  RU: "https://kapowaz.github.io/circle-flags/flags/ru.svg",
  US: "https://kapowaz.github.io/circle-flags/flags/us.svg"
};
const images = prodImages;
// export const images = process.env.NODE_ENV === "production" ? prodImages : devImages;

const renderLogo = () => (/*#__PURE__*/React.createElement("img", {
  src: images.logo,
  className: "w-8 h-8 select-none",
  alt: "logo"
}));
const SideNav = _ref => {
  let {
    className,
    navItemsTop,
    navItemsBottom,
    username,
    email,
    open,
    setOpen
  } = _ref;
  const Logout = FiLogOut;
  const Search = FiSearch;
  const [searchString, setSearchString] = React.useState("");
  const [activeNavItem, setActiveNavItem] = React.useState("");
  const [activeSubNavItem, setActiveSubNavItem] = React.useState("");
  const [openDropdowns, setOpenDropdowns] = React.useState([]);
  const handleSearch = e => {
    setSearchString(e.target.value);
  };
  const onClickNavItem = (item, subNavPath) => {
    if (subNavPath) {
      setActiveSubNavItem(subNavPath);
    }
    if (!item.toggleSidebar) {
      setActiveNavItem(item.label);
    } else if (item.toggleSidebar) {
      setOpen(!open);
    }
    if (item.subItems && openDropdowns.includes(item.label) && !subNavPath) {
      setOpenDropdowns(openDropdowns.filter(dropdownItem => dropdownItem !== item.label));
    } else if (item.subItems && !openDropdowns.includes(item.label)) {
      setOpenDropdowns([...openDropdowns, item.label]);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("py-6 flex flex-col flex-grow bg-white dark:bg-gray-900 transform ease-out duration-100 overflow-y-auto xs:overflow-y-visible", {
      "w-80": open,
      "w-24": !open,
      "border-r border-gray-300 dark:border-opacity-20": true
    }, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center w-full mb-8 ml-9"
  }, renderLogo(), /*#__PURE__*/React.createElement(Typography, {
    variant: "xl",
    className: classNames("ml-2.5 whitespace-nowrap select-none", {
      "opacity-0 hidden": !open
    }),
    customWeight: "medium"
  }, "Box UI")), /*#__PURE__*/React.createElement("div", {
    className: "mb-8 mx-9"
  }, open ? (/*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    value: searchString,
    handleChange: handleSearch,
    placeholder: "Search",
    LeadingIcon: /*#__PURE__*/React.createElement(Search, null)
  })) : (/*#__PURE__*/React.createElement("div", {
    className: "h-11"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classNames("flex flex-col justify-between h-full ml-5 w-70", {
      "w-14": !open
    })
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col space-y-1"
  }, navItemsTop.map(item => (/*#__PURE__*/React.createElement(NavItem, {
    key: item.label,
    item: item,
    isActive: activeNavItem === item.label,
    activeSubNavItem: activeSubNavItem,
    open: open,
    openDropdown: openDropdowns.includes(item.label),
    onClick: onClickNavItem
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col mb-6 space-y-1"
  }, navItemsBottom.map(item => (/*#__PURE__*/React.createElement(NavItem, {
    key: item.label,
    item: item,
    isActive: activeNavItem === item.label,
    activeSubNavItem: activeSubNavItem,
    open: open,
    openDropdown: openDropdowns.includes(item.label),
    onClick: onClickNavItem
  }))))), /*#__PURE__*/React.createElement("hr", {
    className: classNames("ml-5 border-t border-gray-300 dark:border-opacity-20", {
      "w-70": open,
      "w-14": !open
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-6 w-70 ml-7"
  }, open ? (/*#__PURE__*/React.createElement("div", {
    className: "flex justify-between ml-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "select-none"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "sm",
    customWeight: "medium",
    customColor: "text-gray-700 dark:text-white"
  }, username), /*#__PURE__*/React.createElement(Typography, {
    variant: "sm",
    customColor: "text-gray-500"
  }, email)), /*#__PURE__*/React.createElement(Logout, {
    size: 24,
    className: "ml-6 text-gray-400 cursor-pointer"
  }))) : null));
};

const MobileNavbar = _ref => {
  let {
    open,
    toggleOpen
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "z-40 flex items-center justify-between h-20 py-6 bg-white shadow-md dark:bg-gray-900 px-9"
  }, renderLogo(), /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    customWeight: "medium",
    className: "select-none"
  }, "Box UI"), /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: classNames("text-gray-500 transition-all duration-100 ease-out cursor-pointer stroke-current hover:text-gray-900 dark:text-white dark:hover:text-gray-200", {
      "opacity-0": open
    }),
    onClick: toggleOpen
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 16H22.6667M4 8H28M4 24H28",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

const colors = [{
  bgClass: "bg-gray-2",
  code: 25,
  hex: "#FCFCF"
}, {
  bgClass: "bg-gray-50",
  code: 50,
  hex: "#F9FAFB"
}, {
  bgClass: "bg-gray-100",
  code: 100,
  hex: "#F2F4F7"
}, {
  bgClass: "bg-gray-200",
  code: 200,
  hex: "#E4E7EC"
}, {
  bgClass: "bg-gray-300",
  code: 300,
  hex: "#D0D5DD"
}, {
  bgClass: "bg-gray-400",
  code: 400,
  hex: "#98A2B3"
}, {
  bgClass: "bg-gray-500",
  code: 500,
  hex: "#667085"
}, {
  bgClass: "bg-gray-600",
  code: 600,
  hex: "#475467"
}, {
  bgClass: "bg-gray-700",
  code: 700,
  hex: "#344054"
}, {
  bgClass: "bg-gray-800",
  code: 800,
  hex: "#1D2939"
}, {
  bgClass: "bg-gray-900",
  code: 900,
  hex: "#101828"
}, {
  bgClass: "bg-primary-25",
  code: 25,
  hex: "#F5FAFF"
}, {
  bgClass: "bg-primary-50",
  code: 50,
  hex: "#EFF8FF"
}, {
  bgClass: "bg-primary-100",
  code: 100,
  hex: "#D1E9FF"
}, {
  bgClass: "bg-primary-200",
  code: 200,
  hex: "#B2DDFF"
}, {
  bgClass: "bg-primary-300",
  code: 300,
  hex: "#84CAFF"
}, {
  bgClass: "bg-primary-400",
  code: 400,
  hex: "#53B1FD"
}, {
  bgClass: "bg-primary-500",
  code: 500,
  hex: "#2E90FA"
}, {
  bgClass: "bg-primary-600",
  code: 600,
  hex: "#1570EF"
}, {
  bgClass: "bg-primary-700",
  code: 700,
  hex: "#175CD3"
}, {
  bgClass: "bg-primary-800",
  code: 800,
  hex: "#1849A9"
}, {
  bgClass: "bg-primary-900",
  code: 900,
  hex: "#194185"
}, {
  bgClass: "bg-error-25",
  code: 25,
  hex: "#FFFBFA"
}, {
  bgClass: "bg-error-50",
  code: 50,
  hex: "#FEF3F2"
}, {
  bgClass: "bg-error-100",
  code: 100,
  hex: "#FEE4E2"
}, {
  bgClass: "bg-error-200",
  code: 200,
  hex: "#FECDCA"
}, {
  bgClass: "bg-error-300",
  code: 300,
  hex: "#FDA29B"
}, {
  bgClass: "bg-error-400",
  code: 400,
  hex: "#F97066"
}, {
  bgClass: "bg-error-500",
  code: 500,
  hex: "#F04438"
}, {
  bgClass: "bg-error-600",
  code: 600,
  hex: "#D92D20"
}, {
  bgClass: "bg-error-700",
  code: 700,
  hex: "#B42318"
}, {
  bgClass: "bg-error-800",
  code: 800,
  hex: "#912018"
}, {
  bgClass: "bg-error-900",
  code: 900,
  hex: "#7A271A"
}, {
  bgClass: "bg-warning-25",
  code: 25,
  hex: "#FFFCF5"
}, {
  bgClass: "bg-warning-50",
  code: 50,
  hex: "#FFFAEB"
}, {
  bgClass: "bg-warning-100",
  code: 100,
  hex: "#FEF0C7"
}, {
  bgClass: "bg-warning-200",
  code: 200,
  hex: "#FEDF89"
}, {
  bgClass: "bg-warning-300",
  code: 300,
  hex: "#FEC84B"
}, {
  bgClass: "bg-warning-400",
  code: 400,
  hex: "#FDB022"
}, {
  bgClass: "bg-warning-500",
  code: 500,
  hex: "#F79009"
}, {
  bgClass: "bg-warning-600",
  code: 600,
  hex: "#DC6803"
}, {
  bgClass: "bg-warning-700",
  code: 700,
  hex: "#B54708"
}, {
  bgClass: "bg-warning-800",
  code: 800,
  hex: "#93370D"
}, {
  bgClass: "bg-warning-900",
  code: 900,
  hex: "#7A2E0E"
}, {
  bgClass: "bg-success-25",
  code: 25,
  hex: "#F6FEF9"
}, {
  bgClass: "bg-success-50",
  code: 50,
  hex: "#ECFDF3"
}, {
  bgClass: "bg-success-100",
  code: 100,
  hex: "#D1FADF"
}, {
  bgClass: "bg-success-200",
  code: 200,
  hex: "#A6F4C5"
}, {
  bgClass: "bg-success-300",
  code: 300,
  hex: "#6CE9A6"
}, {
  bgClass: "bg-success-400",
  code: 400,
  hex: "#32D583"
}, {
  bgClass: "bg-success-500",
  code: 500,
  hex: "#12B76A"
}, {
  bgClass: "bg-success-600",
  code: 600,
  hex: "#039855"
}, {
  bgClass: "bg-success-700",
  code: 700,
  hex: "#027A48"
}, {
  bgClass: "bg-success-800",
  code: 800,
  hex: "#05603A"
}, {
  bgClass: "bg-success-900",
  code: 900,
  hex: "#054F31"
}];

const countriesData = [{
  city: "Ahmedabad",
  countryISO: "IN"
}, {
  city: "Amsterdam",
  countryISO: "NL"
}, {
  city: "Rome",
  countryISO: "IT"
}, {
  city: "Berlin",
  countryISO: "DE"
}, {
  city: "Paris",
  countryISO: "FR"
}, {
  city: "Washington",
  countryISO: "US"
}, {
  city: "Moscow",
  countryISO: "RU"
}, {
  city: "Brussels",
  countryISO: "BE"
}];
const countries = /*#__PURE__*/countriesData.map(country => ({
  value: country.countryISO,
  label: (/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: images[country.countryISO],
    alt: country.countryISO.toLowerCase(),
    className: "w-5 h-5 mr-2"
  }), " ", `${country.city}, ${country.countryISO}`))
}));

const prices = [{
  label: "Any price",
  value: "-1"
}, {
  label: "Below 50",
  value: "0"
}, {
  label: "50 - 100",
  value: "50"
}, {
  label: "100 - 200",
  value: "100"
}, {
  label: "200 - 300",
  value: "200"
}, {
  label: "300 - 400",
  value: "300"
}, {
  label: "400 - 500",
  value: "400"
}, {
  label: "500 - 600",
  value: "500"
}];

const Home = FiHome;
const Layers = FiLayers;
const Settings = FiSettings;
const Flag = FiFlag;
const MapPin = FiMapPin;
const CheckSquare = FiCheckSquare;
const BarChart = FiBarChart2;
const ArrowLeft = FiArrowLeft;
const navItemsTop = [{
  order: 0,
  path: "home",
  label: "Home",
  icon: /*#__PURE__*/React.createElement(Home, null)
}, {
  order: 1,
  path: "dashboard",
  label: "Dashboard",
  icon: /*#__PURE__*/React.createElement(BarChart, null),
  subItems: [{
    order: 0,
    path: "analytics",
    label: "Analytics"
  }, {
    order: 1,
    path: "apps",
    label: "Apps"
  }, {
    order: 2,
    path: "learn",
    label: "Learn"
  }]
}, {
  order: 2,
  path: "projects",
  label: "Projects",
  icon: /*#__PURE__*/React.createElement(Layers, null)
}, {
  order: 3,
  path: "tasks",
  label: "Tasks",
  icon: /*#__PURE__*/React.createElement(CheckSquare, null)
}, {
  order: 4,
  path: "reporting",
  label: "Reporting",
  icon: /*#__PURE__*/React.createElement(Flag, null)
}, {
  order: 5,
  path: "rentals",
  label: "Rentals",
  icon: /*#__PURE__*/React.createElement(MapPin, null),
  subItems: [{
    order: 0,
    path: "all",
    label: "All rentals"
  }, {
    order: 1,
    path: "popular",
    label: "Popular"
  }, {
    order: 2,
    path: "recent",
    label: "Recently added"
  }]
}];
const navItemsBottom = [{
  order: 0,
  path: "settings",
  label: "Settings",
  icon: /*#__PURE__*/React.createElement(Settings, null)
}, {
  order: 1,
  label: "Close Navbar",
  icon: /*#__PURE__*/React.createElement(ArrowLeft, null),
  toggleSidebar: true
}];

const Circle = FiCircle;
const List = FiList;
const Grid = FiGrid;
const options1 = [{
  value: "Leading",
  content: "Leading"
}, {
  value: "Middle",
  content: "Middle"
}, {
  value: "Trailing",
  content: "Trailing"
}];
const options2 = [{
  value: "first",
  content: (/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Circle, {
    size: 20,
    className: 'mr-2'
  })), "First"))
}, {
  value: "second",
  content: (/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Circle, {
    size: 20,
    className: 'mr-2'
  })), "Second"))
}, {
  value: "third",
  content: (/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Circle, {
    size: 20,
    className: 'mr-2'
  })), "Third"))
}];
const options3 = [{
  value: 'list',
  content: /*#__PURE__*/React.createElement(List, {
    size: 20
  })
}, {
  value: 'grid',
  content: /*#__PURE__*/React.createElement(Grid, {
    size: 20
  })
}];

export { Badge, Button, ButtonGroup, ColorBox, MobileNavbar, Paginate, Select, SideNav, TextInput, Typography, colors, countries, images, navItemsBottom, navItemsTop, options1, options2, options3, prices, renderLogo };
//# sourceMappingURL=box-ui.esm.js.map
