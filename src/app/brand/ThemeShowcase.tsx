// src/app/ThemeShowcase.tsx
'use client';

import { Box, Typography, Button, Paper, Stack, Divider } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

const swatches = [
  { label: 'Primary',        varName: '--brand-palette-primary-main' },
  { label: 'Secondary',      varName: '--brand-palette-secondary-main' },
  { label: 'Background',     varName: '--brand-palette-background-default' },
  { label: 'Paper',          varName: '--brand-palette-background-paper' },
  { label: 'Text Primary',   varName: '--brand-palette-text-primary' },
  { label: 'Text Secondary', varName: '--brand-palette-text-secondary' },
];

const variants = [
  { variant: 'h1',    sample: 'Heading H1' },
  { variant: 'h3',    sample: 'Heading H3' },
  { variant: 'h4',    sample: 'Heading H4 (Recursive)' },
  { variant: 'h5',    sample: 'Heading H5' },
  { variant: 'h6',    sample: 'Heading H6' },
  { variant: 'body1', sample: 'Body 1 — regular paragraph text' },
  { variant: 'body2', sample: 'Body 2 — small / caption' },
];

export default function ThemeShowcase() {
  const { mode, setMode } = useColorScheme();

  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* global toggle */}
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Button variant="outlined" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          Global&nbsp;{mode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>

      {/* side‑by‑side demo */}
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {['light', 'dark'].map((scheme) => (
          <Box
            key={scheme}
            className={scheme} // ⇢ scopes CSS vars to this half
            sx={(theme) => ({
              p: 4,
              overflowY: 'auto',
              bgcolor: 'var(--brand-palette-background-default)',
              color: 'var(--brand-palette-text-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              borderRight: scheme === 'light' ? '1px solid #0001' : undefined,
            })}
          >
            <Typography variant="h3" gutterBottom textAlign="center">
              {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
            </Typography>

            {/* typography variants */}
            <Stack gap={1}>
              {variants.map(({ variant, sample }) => (
                <Typography key={variant} variant={variant as any}>
                  {sample}
                </Typography>
              ))}
            </Stack>


            {/* colour swatches */}
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {swatches.map((s) => (
                <Box
                  key={s.varName}
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: `var(${s.varName})`,
                    color: scheme === 'light' ? '#0007' : '#fff7',
                    fontSize: 11,
                    boxShadow: 1,
                  }}
                >
                  {s.label}
                </Box>
              ))}
            </Stack>


            {/* component overrides */}
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <Button color="primary">Contained Primary</Button>
              <Button variant="outlined" color="secondary">
                Outlined Secondary
              </Button>
              <Button variant="text">Text Default</Button>
            </Stack>

            <Paper sx={{ mt: 3, p: 2, maxWidth: 380, mx: 'auto' }}>
              <Typography variant="body2">
                Paper override — no shadow or bg‑image, border‑radius&nbsp;8.
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
