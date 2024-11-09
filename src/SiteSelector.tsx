import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface SiteSelectorProps {
    options: Option[];
    defaultOptions: Option[];
    onSiteChange: (updatedSites: Option[]) => void;
}

export interface Option {
    label: string;
    value: string;
}

const SiteSelector: React.FC<SiteSelectorProps> = ({ options, defaultOptions, onSiteChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>(defaultOptions);
    const [allOptions, setAllOptions] = useState<Option[]>(options);

    useEffect(() => {
        setAllOptions(options);
        setSelectedOptions(defaultOptions);
    }, [defaultOptions, options]);

    const handleUpdate = (_event: React.SyntheticEvent, newValue: Option[]) => {
        const deletedOne = selectedOptions.filter(item => !newValue.includes(item));
        if (deletedOne.length == 1) {
            setAllOptions(Array.from(new Set([...allOptions, deletedOne[0]])))
        }
        setSelectedOptions(newValue);
        onSiteChange(newValue);
    };

    return (
        <div>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Select the News Sources:
            </Typography>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={allOptions}
                value={selectedOptions}
                ChipProps={{ color: "primary" }}
                getOptionLabel={(option) => option.label}
                onChange={handleUpdate}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Sites"
                        placeholder="Sites"
                    />
                )}
            />
        </div>
    );
};

export default SiteSelector;
