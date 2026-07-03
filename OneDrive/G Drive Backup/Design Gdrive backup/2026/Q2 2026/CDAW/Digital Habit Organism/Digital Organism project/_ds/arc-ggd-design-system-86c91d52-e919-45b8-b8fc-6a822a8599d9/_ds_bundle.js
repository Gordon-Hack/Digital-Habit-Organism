/* @ds-bundle: {"format":3,"namespace":"ArcGGDDesignSystem_86c91d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3718303a3989","components/core/Button.jsx":"f0908ee06e14","components/core/Card.jsx":"1f80a8b403f2","components/core/Divider.jsx":"bc85c0b165f8","components/core/Input.jsx":"993f1366409b","components/core/Tag.jsx":"dd2cdf6daaaa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArcGGDDesignSystem_86c91d = window.ArcGGDDesignSystem_86c91d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const VARIANT_STYLES = {
  default: {
    background: '#0A0A0A',
    color: '#fff',
    border: '1.5px solid #0A0A0A'
  },
  brand: {
    background: '#1F48FF',
    color: '#fff',
    border: '1.5px solid #1F48FF'
  },
  outline: {
    background: '#fff',
    color: '#0A0A0A',
    border: '1.5px solid #0A0A0A'
  },
  ghost: {
    background: '#F0F0F0',
    color: '#676767',
    border: '1.5px solid #C8C8C8'
  },
  success: {
    background: '#1A7A2A',
    color: '#fff',
    border: '1.5px solid #1A7A2A'
  },
  warning: {
    background: '#B86000',
    color: '#fff',
    border: '1.5px solid #B86000'
  },
  danger: {
    background: '#C8000A',
    color: '#fff',
    border: '1.5px solid #C8000A'
  }
};
function Badge({
  children,
  variant = 'default',
  dot = false
}) {
  const v = VARIANT_STYLES[variant] || VARIANT_STYLES.default;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      fontSize: '0.625rem',
      fontFamily: "'FreeSans', 'Helvetica Neue', Arial, sans-serif",
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      lineHeight: '1.4',
      whiteSpace: 'nowrap',
      borderRadius: '0px',
      ...v
    }
  }, dot && React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '6px 14px',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    gap: '6px'
  },
  md: {
    padding: '10px 20px',
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    gap: '8px'
  },
  lg: {
    padding: '14px 28px',
    fontSize: '1rem',
    letterSpacing: '0.08em',
    gap: '10px'
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: '#1F48FF',
      color: '#fff',
      border: '2px solid #1F48FF',
      boxShadow: '4px 4px 0 0 #0A0A0A'
    },
    hover: {
      background: '#1237D6',
      borderColor: '#1237D6',
      boxShadow: '6px 6px 0 0 #0A0A0A'
    },
    active: {
      background: '#0D28B8',
      transform: 'translate(2px, 2px)',
      boxShadow: '2px 2px 0 0 #0A0A0A'
    }
  },
  secondary: {
    base: {
      background: '#fff',
      color: '#0A0A0A',
      border: '2px solid #0A0A0A',
      boxShadow: '4px 4px 0 0 #0A0A0A'
    },
    hover: {
      background: '#F0F0F0',
      boxShadow: '6px 6px 0 0 #0A0A0A'
    },
    active: {
      background: '#e0e0e0',
      transform: 'translate(2px, 2px)',
      boxShadow: '2px 2px 0 0 #0A0A0A'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: '#1F48FF',
      border: '2px solid #1F48FF',
      boxShadow: 'none'
    },
    hover: {
      background: '#E8EDFF',
      boxShadow: '4px 4px 0 0 #1F48FF'
    },
    active: {
      background: '#d0daff',
      transform: 'translate(1px, 1px)'
    }
  },
  danger: {
    base: {
      background: '#C8000A',
      color: '#fff',
      border: '2px solid #C8000A',
      boxShadow: '4px 4px 0 0 #0A0A0A'
    },
    hover: {
      background: '#A0000A',
      boxShadow: '6px 6px 0 0 #0A0A0A'
    },
    active: {
      background: '#800008',
      transform: 'translate(2px, 2px)',
      boxShadow: '2px 2px 0 0 #0A0A0A'
    }
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button'
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: "'FreeSans', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: s.letterSpacing,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    border: 'none',
    outline: 'none',
    transition: 'background 80ms, box-shadow 80ms, transform 80ms',
    userSelect: 'none',
    width: fullWidth ? '100%' : undefined,
    flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
    ...v.base,
    ...(hovered && !disabled ? v.hover : {}),
    ...(pressed && !disabled ? v.active : {})
  };
  return React.createElement('button', {
    type,
    style,
    disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, icon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'default',
  padding = 'md',
  shadow = true,
  accent = false,
  as = 'div',
  onClick
}) {
  const [hovered, setHovered] = React.useState(false);
  const PAD = {
    none: '0',
    sm: '16px',
    md: '24px',
    lg: '40px'
  };
  const isClickable = !!onClick;
  const VARIANTS = {
    default: {
      background: '#fff',
      border: '2px solid #0A0A0A'
    },
    brand: {
      background: '#1F48FF',
      border: '2px solid #1F48FF',
      color: '#fff'
    },
    dark: {
      background: '#0A0A0A',
      border: '2px solid #0A0A0A',
      color: '#fff'
    },
    subtle: {
      background: '#F0F0F0',
      border: '1px solid #C8C8C8'
    }
  };
  const v = VARIANTS[variant] || VARIANTS.default;
  const shadowVal = shadow ? hovered && isClickable ? '8px 8px 0 0 #0A0A0A' : '5px 5px 0 0 #0A0A0A' : 'none';
  return React.createElement(as, {
    style: {
      display: 'block',
      padding: PAD[padding] || PAD.md,
      boxShadow: shadowVal,
      transition: 'box-shadow 120ms, transform 120ms',
      transform: hovered && isClickable ? 'translate(-1px, -1px)' : 'none',
      cursor: isClickable ? 'pointer' : 'default',
      borderLeft: accent ? `5px solid #1F48FF` : undefined,
      ...v
    },
    onClick,
    onMouseEnter: isClickable ? () => setHovered(true) : undefined,
    onMouseLeave: isClickable ? () => setHovered(false) : undefined
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  label = '',
  variant = 'default',
  spacing = 'md'
}) {
  const SPACING = {
    sm: '12px',
    md: '24px',
    lg: '40px'
  };
  const sp = SPACING[spacing] || SPACING.md;
  const VARIANTS = {
    default: {
      borderColor: '#C8C8C8',
      borderWidth: '1px'
    },
    strong: {
      borderColor: '#0A0A0A',
      borderWidth: '2px'
    },
    brand: {
      borderColor: '#1F48FF',
      borderWidth: '3px'
    },
    dashed: {
      borderColor: '#C8C8C8',
      borderWidth: '1px',
      borderStyle: 'dashed'
    }
  };
  const v = VARIANTS[variant] || VARIANTS.default;
  if (label) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: `${sp} 0`,
        fontFamily: "'FreeSans', 'Helvetica Neue', Arial, sans-serif"
      }
    }, React.createElement('div', {
      style: {
        flex: 1,
        borderTop: `${v.borderWidth} ${v.borderStyle || 'solid'} ${v.borderColor}`
      }
    }), React.createElement('span', {
      style: {
        fontSize: '0.625rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: '#676767',
        whiteSpace: 'nowrap'
      }
    }, label), React.createElement('div', {
      style: {
        flex: 1,
        borderTop: `${v.borderWidth} ${v.borderStyle || 'solid'} ${v.borderColor}`
      }
    }));
  }
  return React.createElement('hr', {
    style: {
      margin: `${sp} 0`,
      border: 'none',
      borderTop: `${v.borderWidth} ${v.borderStyle || 'solid'} ${v.borderColor}`
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = '',
  hint = '',
  size = 'md',
  fullWidth = false,
  prefix = null,
  suffix = null
}) {
  const [focused, setFocused] = React.useState(false);
  const SIZES = {
    sm: {
      padding: '6px 10px',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '10px 14px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '13px 18px',
      fontSize: '1.0625rem'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const borderColor = error ? '#C8000A' : focused ? '#1F48FF' : '#0A0A0A';
  const boxShadow = error ? '3px 3px 0 0 #C8000A' : focused ? '3px 3px 0 0 #1F48FF' : '3px 3px 0 0 #0A0A0A';
  const wrapStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '6px',
    width: fullWidth ? '100%' : undefined,
    fontFamily: "'FreeSans', 'Helvetica Neue', Arial, sans-serif"
  };
  const inputWrap = {
    display: 'flex',
    alignItems: 'center',
    border: `2px solid ${borderColor}`,
    boxShadow,
    background: disabled ? '#F0F0F0' : '#fff',
    transition: 'border-color 80ms, box-shadow 80ms'
  };
  const inputStyle = {
    flex: 1,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'inherit',
    fontWeight: 400,
    color: '#0A0A0A',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.5 : 1
  };
  const affix = {
    padding: '0 10px',
    fontSize: s.fontSize,
    color: '#676767',
    fontWeight: 700,
    letterSpacing: '0.05em',
    userSelect: 'none'
  };
  return React.createElement('div', {
    style: wrapStyle
  }, label && React.createElement('label', {
    style: {
      fontSize: '0.6875rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: error ? '#C8000A' : '#0A0A0A'
    }
  }, label), React.createElement('div', {
    style: inputWrap
  }, prefix && React.createElement('span', {
    style: {
      ...affix,
      borderRight: '2px solid #C8C8C8'
    }
  }, prefix), React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle
  }), suffix && React.createElement('span', {
    style: {
      ...affix,
      borderLeft: '2px solid #C8C8C8'
    }
  }, suffix)), (error || hint) && React.createElement('span', {
    style: {
      fontSize: '0.6875rem',
      color: error ? '#C8000A' : '#676767',
      letterSpacing: '0.04em'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  removable = false,
  onRemove,
  variant = 'default'
}) {
  const VARIANTS = {
    default: {
      background: '#F0F0F0',
      color: '#0A0A0A',
      border: '1.5px solid #C8C8C8'
    },
    brand: {
      background: '#E8EDFF',
      color: '#1F48FF',
      border: '1.5px solid #1F48FF'
    },
    dark: {
      background: '#0A0A0A',
      color: '#fff',
      border: '1.5px solid #0A0A0A'
    },
    filled: {
      background: '#1F48FF',
      color: '#fff',
      border: '1.5px solid #1F48FF'
    }
  };
  const v = VARIANTS[variant] || VARIANTS.default;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      fontSize: '0.6875rem',
      fontFamily: "'FreeSans', 'Helvetica Neue', Arial, sans-serif",
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      whiteSpace: 'nowrap',
      borderRadius: '0',
      ...v
    }
  }, React.createElement('span', null, children), removable && React.createElement('button', {
    onClick: onRemove,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: '0',
      lineHeight: 1,
      opacity: 0.7,
      fontSize: '0.875rem',
      fontFamily: 'inherit'
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
