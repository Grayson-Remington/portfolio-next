import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      {/*Social Icons */}
      <p className="mt-2 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Gray Remington. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
