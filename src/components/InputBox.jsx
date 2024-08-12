import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-4 rounded-xl shadow-lg text-sm flex ${className}`}>
            <div className="w-1/2 pr-2">
                <label htmlFor={amountInputId} className="text-gray-600 mb-2 block font-semibold">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-gray-100 py-2 px-3 rounded-lg border border-gray-300 focus:border-blue-500 transition-colors"
                    type="number"
                    step="any"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 pl-2">
                <label className="text-gray-600 mb-2 block font-semibold">Currency</label>
                <select
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-gray-100 focus:border-blue-500 cursor-pointer outline-none transition-colors"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
