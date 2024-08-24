import React  from "react";

function ToggleSwitch({ label, checked, onChange }) {
  return (
    <label className="flex items-center bg-white cursor-pointer space-x-3">
      <div className="relative bg-white">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer "
        />
        <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-black"></div>
        <div
          className={`absolute bg-white left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform peer-checked:translate-x-4 transition-transform duration-300`}
        ></div>
      </div>
      <span className="text-gray-700 bg-white">{label}</span>
    </label>
  );
}
export default ToggleSwitch;