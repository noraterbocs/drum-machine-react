import React from 'react';

export const BankSwitch = ({ checkedBank, setBank }) => {
    return (
        <div>
            <input
                className="bank"
                type="checkbox"
                checked={checkedBank}
                onChange={setBank}
            />
            <label>
                Bank
            </label>
        </div>
    );
}