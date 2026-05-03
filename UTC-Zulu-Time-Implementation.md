# UTC/Zulu Time Implementation Summary

## Overview

This implementation adds comprehensive UTC/Zulu time support to the GM-GPS-eMITS-UI Grafx component to properly handle timestamps ending with 'Z' and ensure accurate time comparisons for LATE/EARLY detection.

## Changes Made

### 1. UTC/Zulu Time Utilities (grafx.script.js)

Added static utility methods to the Grafx class:

- `Grafx.parseZuluTime(timestamp)` - Parses various timestamp formats including 'Z' time
- `Grafx.getCurrentZuluTime()` - Gets current UTC time in milliseconds
- `Grafx.formatLocalMilitaryTime(timestamp)` - Formats as local 24-hour time (HH:MM:SS)
- `Grafx.formatLocalMeridianTime(timestamp)` - Formats as local 12-hour time with AM/PM
- `Grafx.formatUTCTime(timestamp)` - Formats as UTC time
- `Grafx.isTimestampLateOrEarly(measurementTimestamp, windowMs)` - UTC-based LATE/EARLY detection
- `Grafx.formatTimeByDisplayMode(timestamp, displayMode)` - Format according to display mode

### 2. Time Display Formats

Added `TIME_DISPLAY_FORMATS` constant with options:

- `LOCAL_MILITARY` - 24-hour format (default): "14:30:15"
- `LOCAL_MERIDIAN` - 12-hour format: "2:30:15 PM"
- `UTC` - UTC format: "14:30:15 UTC"

### 3. Enhanced Measurement Processing

Updated `#normalizeIncomingMeasurement()` to:

- Check for `_ts` fields: `Updated_ts`, `Created_ts` in addition to `timestamp`
- Use `Grafx.parseZuluTime()` for proper UTC parsing
- Maintain backward compatibility with existing timestamp formats

### 4. Improved LATE/EARLY Detection (monitor.script.js)

Updated `processMeasurement()` in Monitor class to:

- Use UTC/Zulu time utilities for accurate comparisons
- Compare measurement timestamps against current UTC time consistently
- Support `_ts` field detection from measurement objects

### 5. X-Axis Display Enhancement

Updated X-axis label rendering to:

- Use configurable time display formats
- Default to local military time (24-hour format)
- Support toggling between display formats
- Update tooltips to use same formatting

### 6. Public API Methods

Added public methods for time display control:

- `setTimeDisplayMode(displayMode)` - Set specific format
- `getTimeDisplayMode()` - Get current format
- `toggleTimeDisplayMode()` - Cycle through formats

## Usage Examples

### Setting Time Display Format

```javascript
// Set to local military time (default)
grafx.setTimeDisplayMode(Grafx.TIME_DISPLAY_FORMATS.LOCAL_MILITARY);

// Set to local meridian format
grafx.setTimeDisplayMode(Grafx.TIME_DISPLAY_FORMATS.LOCAL_MERIDIAN);

// Set to UTC format
grafx.setTimeDisplayMode(Grafx.TIME_DISPLAY_FORMATS.UTC);

// Toggle through all formats
const newMode = grafx.toggleTimeDisplayMode();
```

### Measurement Objects with \_ts Fields

```javascript
// All of these timestamp fields are now properly supported
const measurement = {
  timestamp: "2024-10-27T14:30:15.000Z", // Primary
  Created_ts: "2024-10-27T14:30:10.000Z", // Fallback 1
  Updated_ts: "2024-10-27T14:30:15.000Z", // Fallback 2
  value: 25.5,
  station: "Station1",
  sensor: "Temperature",
};

grafx.enqueueMeasurement(measurement);
```

### LATE/EARLY Detection

```javascript
// Check if measurement is late or early (30 second window)
const status = Grafx.isTimestampLateOrEarly("2024-10-27T14:30:15.000Z", 30000);
// Returns: 'LATE', 'EARLY', or null (on-time)
```

## Technical Implementation Details

### 1. Timestamp Priority Order

When processing measurements, timestamps are checked in this order:

1. `measurement.timestamp`
2. `measurement.time`
3. `measurement.Updated_ts`
4. `measurement.Created_ts`
5. Current UTC time (fallback)

### 2. UTC Consistency

- All time comparisons now use UTC milliseconds consistently
- LATE/EARLY detection compares UTC timestamps against current UTC time
- Eliminates timezone-related comparison errors

### 3. Backward Compatibility

- Existing measurement formats continue to work
- Default display remains local military time
- No breaking changes to existing API

### 4. Performance Considerations

- Timestamp parsing is optimized with early validation
- Static utility methods for reusability
- Minimal overhead for existing functionality

## Future Enhancements

The implementation is structured to easily support:

1. Additional time display formats
2. User preference persistence
3. Timezone-specific displays
4. Custom time formatting options

## Files Modified

1. `Source/backend/uic/grafx/grafx.script.js` - Main implementation
2. `Source/backend/uic/monitor/monitor.script.js` - LATE/EARLY detection

## Testing

The implementation can be tested by:

1. Loading Grafx in browser console
2. Sending measurements with various timestamp formats
3. Toggling time display modes to verify formatting
4. Verifying LATE/EARLY detection with out-of-window timestamps

This implementation ensures proper handling of UTC/Zulu timestamps from external systems while providing flexible display options for local time visualization.

## Monitor Time Display Toggle

Added a new interactive time display mode toggle button to the Monitor UI:

### **Features:**

- **Position**: Left of existing [OCV] and [ACIR] buttons
- **3-Way Toggle**: MILITARY → MERIDIAN → UTC → MILITARY
- **Visual Indicator**: Shows current mode (e.g., "MILITARY")
- **Consistent Styling**: Matches existing metric toggle buttons

### **Usage:**

```javascript
// Toggle through time display modes
const newMode = monitor.toggleTimeDisplayMode();

// Current mode is displayed on button: [MILITARY], [MERIDIAN], or [UTC]
```

### **Integration:**

- Automatically updates connected Grafx instance time display
- Synchronizes Monitor and Grafx time format settings
- Maintains state during monitor session lifecycle
- Provides hover tooltips showing next mode
