export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-neutral-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-neutral-400">
          © {new Date().getFullYear()} ABC Spacery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
