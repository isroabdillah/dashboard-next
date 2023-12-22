import React from "react";

interface ModalProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const Modal3: React.FC<ModalProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="rounded-xl bg-white shadow-sm">
      <div className="p-6 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FF5959]">
          {title}
        </p>

        <h2 className="mt-6 text-3xl font-bold">
          {subtitle}
        </h2>

        <a
          className="mt-8 inline-block w-full rounded-full bg-[#FF5959] py-4 text-sm font-bold text-white shadow-md"
          href=""
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};
