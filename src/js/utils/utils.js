
const ellipsis = (text, length) => (text.length > length) ? `${text.substr(0, length - 1)}...` : text;

export default ellipsis;

