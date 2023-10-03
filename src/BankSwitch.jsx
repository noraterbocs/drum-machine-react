import React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export const BankSwitch = ({ checkedBank, setBank }) => {
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: pink[600],
            '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: pink[600],
        },
    }));
    return (
        <div>
            <PinkSwitch
                aria-label="Bank switch"
                className="bank"
                type="checkbox"
                checked={checkedBank}
                onChange={setBank} />
            <label>
                Bank
            </label>
        </div>
    );
}