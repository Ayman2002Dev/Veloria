import {
  Autocomplete,
  Box,
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

function CheckoutAdress({ header, control }) {
  const isBilling = header === "Billing Address" ? true : false;
  const [checked, setChecked] = useState(false);
  const countries = [
    { code: "EG", name: "Egypt" },
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BR", name: "Brazil" },
    { code: "BN", name: "Brunei" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "CV", name: "Cabo Verde" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "KY", name: "Cayman Islands" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CG", name: "Congo – Brazzaville" },
    { code: "CD", name: "Congo – Kinshasa" },
    { code: "CR", name: "Costa Rica" },
    { code: "CI", name: "Côte d’Ivoire" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "SZ", name: "Eswatini" },
    { code: "ET", name: "Ethiopia" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambia" },
    { code: "GE", name: "Georgia" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GR", name: "Greece" },
    { code: "GD", name: "Grenada" },
    { code: "GT", name: "Guatemala" },
    { code: "GN", name: "Guinea" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HN", name: "Honduras" },
    { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" },
    { code: "JO", name: "Jordan" },
    { code: "KZ", name: "Kazakhstan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Korea, North" },
    { code: "KR", name: "Korea, South" },
    { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "LA", name: "Laos" },
    { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libya" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MG", name: "Madagascar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauritius" },
    { code: "MX", name: "Mexico" },
    { code: "FM", name: "Micronesia" },
    { code: "MD", name: "Moldova" },
    { code: "MC", name: "Monaco" },
    { code: "MN", name: "Mongolia" },
    { code: "ME", name: "Montenegro" },
    { code: "MA", name: "Morocco" },
    { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibia" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Netherlands" },
    { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" },
    { code: "NE", name: "Niger" },
    { code: "NG", name: "Nigeria" },
    { code: "MK", name: "North Macedonia" },
    { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" },
    { code: "PK", name: "Pakistan" },
    { code: "PS", name: "palestine" },
    { code: "PW", name: "Palau" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "QA", name: "Qatar" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russia" },
    { code: "RW", name: "Rwanda" },
    { code: "KN", name: "Saint Kitts and Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "VC", name: "Saint Vincent and the Grenadines" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "Sao Tome and Principe" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SN", name: "Senegal" },
    { code: "RS", name: "Serbia" },
    { code: "SC", name: "Seychelles" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapore" },
    { code: "SK", name: "Slovakia" },
    { code: "SI", name: "Slovenia" },
    { code: "SB", name: "Solomon Islands" },
    { code: "SO", name: "Somalia" },
    { code: "ZA", name: "South Africa" },
    { code: "SS", name: "South Sudan" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Suriname" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "SY", name: "Syria" },
    { code: "TW", name: "Taiwan" },
    { code: "TJ", name: "Tajikistan" },
    { code: "TZ", name: "Tanzania" },
    { code: "TH", name: "Thailand" },
    { code: "TG", name: "Togo" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TM", name: "Turkmenistan" },
    { code: "TV", name: "Tuvalu" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VA", name: "Vatican City" },
    { code: "VE", name: "Venezuela" },
    { code: "VN", name: "Vietnam" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambia" },
    { code: "ZW", name: "Zimbabwe" },
  ];

  return (
    <Box
      sx={{
        borderRadius: "12px",
        p: 2,
        bgcolor: "secondary.main",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          mb: isBilling ? 0 : 2,
          fontWeight: "500",
          color: "mainText.main",
        }}
      >
        {header || "Header"}
      </Typography>
      {isBilling && (
        <FormControlLabel
          sx={{ mb: 2 }}
          label="Same as shipping address"
          slotProps={{
            typography: {
              sx: { fontSize: 14, fontWeight: 400 },
            },
          }}
          control={
            <Checkbox
              size="small"
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              color="secondary.main"
            />
          }
        />
      )}
      {!checked && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1f", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "Name is Required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Full Name"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is Required",
              minLength: {
                value: 11,
                message: "Phone must be greater than 11 digits",
              },
              pattern: {
                value: /^[0-9]{11,}$/,
                message: "Phone must be at least 11 digits and numbers only",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Phone Number"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is Required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Email"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="company"
            control={control}
            rules={{
              required: "Company is Required",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Company"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="address1"
            control={control}
            rules={{
              required: "Address 1 is Required",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Address 1"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="address2"
            control={control}
            rules={{
              required: "Address 2 is Required",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Address 2"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="country"
            control={control}
            defaultValue={{ code: "EG", name: "Egypt" }}
            rules={{ required: "Country is required" }}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                {...field}
                options={countries}
                getOptionLabel={(option) => option.name || ""}
                isOptionEqualToValue={(option, value) =>
                  option.code === value.code
                }
                onChange={(_, value) => field.onChange(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    slotProps={{
                      inputLabel: {
                        sx: { fontSize: "14px" },
                      },
                    }}
                    label="Country"
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            )}
          />

          <Controller
            name="zip"
            control={control}
            rules={{
              required: "Zip is Required",
              pattern: {
                value: /^[0-9]{5,}$/,
                message: "Phone must be at least 5 digits and numbers only",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                slotProps={{
                  inputLabel: {
                    sx: { fontSize: "14px" },
                  },
                }}
                label="Zip Code"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
}

export default CheckoutAdress;
