function Modal({ header, body, footer }) {
  return (
    <div className="modal">
      <div className="header">{header}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  );
}

export default Modal;
