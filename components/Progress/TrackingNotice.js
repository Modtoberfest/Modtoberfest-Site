import Link from "next/link";
import React from "react";

export default function TrackingNotice() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold">Notices</h2>
      <div>Contributions might be delayed for as much as ~10 minutes</div>
      <div>Only one contribution by repository</div>
      <div>Invalid pull requests aren't accounted for</div>
      <p>
        <Link href="/faq">
          <a className="font-bold">FAQ</a>
        </Link>{" "}
        -{" "}
        <Link href="/contact">
          <a className="font-bold">Support</a>
        </Link>
      </p>
    </div>
  );
}
