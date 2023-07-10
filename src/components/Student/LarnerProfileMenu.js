import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LarnerProfileMenu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [teacher, setTeacher] = useState(null);
  const [role, setRole] = useState({});

  useEffect(() => {
    const isTeacher = localStorage.getItem("teacher");
    const isUserRole = localStorage.getItem("userRole");
    // console.log(isLogin);

    if (isTeacher) {
      const tokenObject = JSON.parse(isTeacher);
      setTeacher(tokenObject);
    }

    if (isUserRole) {
      const tokenObject = JSON.parse(isUserRole);
      setRole(tokenObject);
    }
  }, [role.role]);

  return (
    <>
      <ul className="larner-profile-menu">
        <li
          className={`${pathname === `/${role.role}/settings` ? "active" : ""}`}
        >
          <Link href={`/${role.role}/settings`}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18V17.35C4 17.01 4.16 16.69 4.41 16.54C6.1 15.53 8.03 15 10 15C10.03 15 10.05 15 10.08 15.01C10.18 14.31 10.38 13.64 10.67 13.03C10.45 13.01 10.23 13 10 13C7.58 13 5.32 13.67 3.39 14.82C2.51 15.34 2 16.32 2 17.35V20H11.26C10.84 19.4 10.51 18.72 10.29 18H4Z"
                  fill="#101840"
                />
                <path
                  d="M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C11.1 6 12 6.9 12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6Z"
                  fill="#101840"
                />
                <path
                  d="M20.75 16C20.75 15.78 20.72 15.58 20.69 15.37L21.83 14.36L20.83 12.63L19.38 13.12C19.06 12.85 18.7 12.64 18.3 12.49L18 11H16L15.7 12.49C15.3 12.64 14.94 12.85 14.62 13.12L13.17 12.63L12.17 14.36L13.31 15.37C13.28 15.58 13.25 15.78 13.25 16C13.25 16.22 13.28 16.42 13.31 16.63L12.17 17.64L13.17 19.37L14.62 18.88C14.94 19.15 15.3 19.36 15.7 19.51L16 21H18L18.3 19.51C18.7 19.36 19.06 19.15 19.38 18.88L20.83 19.37L21.83 17.64L20.69 16.63C20.72 16.42 20.75 16.22 20.75 16ZM17 18C15.9 18 15 17.1 15 16C15 14.9 15.9 14 17 14C18.1 14 19 14.9 19 16C19 17.1 18.1 18 17 18Z"
                  fill="#101840"
                />
              </svg>
            </span>
            Profile Settings
          </Link>
        </li>
        <li
          className={`${
            pathname === `/${role.role}/change-password` ? "active" : ""
          }`}
        >
          <Link href={`/${role.role}/change-password`}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17ZM18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6ZM18 20H6V10H18V20Z"
                  fill="#101840"
                />
              </svg>
            </span>
            Change Password
          </Link>
        </li>
        <li
          className={`${
            pathname === `/${role.role}/notification` ? "active" : ""
          }`}
        >
          <Link href={`/${role.role}/notification`}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9993 22C13.0993 22 13.9993 21.1 13.9993 20H9.9993C9.9993 21.1 10.8993 22 11.9993 22ZM17.9993 16V11C17.9993 7.93 16.3693 5.36 13.4993 4.68V4C13.4993 3.17 12.8293 2.5 11.9993 2.5C11.1693 2.5 10.4993 3.17 10.4993 4V4.68C7.6393 5.36 5.9993 7.92 5.9993 11V16L3.9993 18V19H19.9993V18L17.9993 16ZM15.9993 17H7.9993V11C7.9993 8.52 9.5093 6.5 11.9993 6.5C14.4893 6.5 15.9993 8.52 15.9993 11V17ZM7.5793 4.08L6.1493 2.65C3.7493 4.48 2.1693 7.3 2.0293 10.5H4.0293C4.1793 7.85 5.5393 5.53 7.5793 4.08ZM19.9693 10.5H21.9693C21.8193 7.3 20.2393 4.48 17.8493 2.65L16.4293 4.08C18.4493 5.53 19.8193 7.85 19.9693 10.5Z"
                  fill="black"
                />
              </svg>
            </span>
            Notifications
          </Link>
        </li>
        <li
          className={`${
            pathname === `/${role.role}/payment-method` ? "active" : ""
          }`}
        >
          <Link href={`/${role.role}/payment-method`}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8003 10.9C9.53031 10.31 8.80031 9.7 8.80031 8.75C8.80031 7.66 9.81031 6.9 11.5003 6.9C13.2803 6.9 13.9403 7.75 14.0003 9H16.2103C16.1403 7.28 15.0903 5.7 13.0003 5.19V3H10.0003V5.16C8.06031 5.58 6.50031 6.84 6.50031 8.77C6.50031 11.08 8.41031 12.23 11.2003 12.9C13.7003 13.5 14.2003 14.38 14.2003 15.31C14.2003 16 13.7103 17.1 11.5003 17.1C9.44031 17.1 8.63031 16.18 8.52031 15H6.32031C6.44031 17.19 8.08031 18.42 10.0003 18.83V21H13.0003V18.85C14.9503 18.48 16.5003 17.35 16.5003 15.3C16.5003 12.46 14.0703 11.49 11.8003 10.9Z"
                  fill="#101840"
                />
              </svg>
            </span>
            Payment Method
          </Link>
        </li>
        <li
          className={`${
            pathname === `/${role.role}/remove-account` ? "active" : ""
          }`}
        >
          <Link href={`/${role.role}/remove-account`}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                  fill="black"
                />
              </svg>
            </span>
            Remove Account
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LarnerProfileMenu;
