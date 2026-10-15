function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Chào buổi sáng";
  }

  if (hour < 18) {
    return "Chào buổi chiều";
  }

  return "Chào buổi tối";
}

export default function Greeting({ name, role, avatar }) {
  const displayName = name?.trim() || "Bạn";
  const displayRole = role?.trim() || "Chưa cập nhật vai trò";
  return (
    <div className="greeting-card">
      <img
        className="greeting-card__avatar"
        src={avatar || "/default-avatar.png"}
        alt={`Ảnh đại diện của ${displayName}`}
        onError={(e) => {
          e.currentTarget.src = "/default-avatar.png";
        }}
      />

      <h2 className="greeting-card__name">{displayName}</h2>
      <p className="greeting-card__role">{displayRole}</p>
      <p className="greeting-card__message">
        {getGreeting()}, {displayName}!
      </p>
    </div>
  );
}
