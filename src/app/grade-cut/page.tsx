"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import {
  Box,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { TuneRounded } from "@mui/icons-material";

function createData(grade: number, score: number) {
  return { grade, score };
}

const rows = [
  createData(1, 90),
  createData(2, 80),
  createData(3, 70),
  createData(4, 60),
  createData(5, 50),
  createData(6, 40),
  createData(7, 30),
  createData(8, 20),
  createData(9, 10),
];

const GradeCutPage = () => {
  const [value, setValue] = useState(0);
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleGradeChange = (event: SelectChangeEvent<string>) => {
    setGrade(event.target.value as string);
  };

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value as string);
  };

  return (
    <Container sx={{ mt: "57px" }}>
      <AppBar page="grade-cut" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box>
          <Tabs value={value} onChange={handleTabChange} variant="scrollable">
            <Tab label="국영수한" />
            <Tab label="사회" />
            <Tab label="과학" />
            <Tab label="직업" />
            <Tab label="제2외/한문" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            color: "grey.400",
          }}
        >
          <FormControl size="small" sx={{ minWidth: "90px" }}>
            <InputLabel id="grade-select-label">학년</InputLabel>
            <Select
              labelId="grade-select-label"
              id="grade-select"
              label="학년"
              value={grade}
              onChange={handleGradeChange}
            >
              <MenuItem value={1}>1학년</MenuItem>
              <MenuItem value={2}>2학년</MenuItem>
              <MenuItem value={3}>3학년</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: "90px" }}>
            <InputLabel id="month-select-label">월</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              label="학년"
              value={month}
              onChange={handleMonthChange}
            >
              <MenuItem value={3}>3월</MenuItem>
              <MenuItem value={6}>6월</MenuItem>
              <MenuItem value={9}>9월</MenuItem>
            </Select>
          </FormControl>
          <Chip
            icon={<TuneRounded />}
            label="필터"
            variant="outlined"
            onClick={() => {}}
            sx={{
              height: "inherit",
              paddingInline: "8px",
              borderRadius: "20px",
            }}
          />
        </Box>
        <TableContainer sx={{ display: "flex", gap: "12px" }}>
          <Box sx={{ flex: "1 0 0" }}>
            <Typography variant="h5" sx={{ mb: "12px" }}>
              국어
            </Typography>
            <Table sx={{ border: "1px solid #E0E0E0" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography variant="subtitle2">등급</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">원점수</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.grade} sx={{ typography: "body1" }}>
                    <TableCell align="center">{row.grade}등급</TableCell>
                    <TableCell align="center">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ flex: "1 0 0" }}>
            <Typography variant="h5" sx={{ mb: "12px" }}>
              수학
            </Typography>
            <Table sx={{ border: "1px solid #E0E0E0" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography variant="subtitle2">등급</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">원점수</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.grade} sx={{ typography: "body1" }}>
                    <TableCell align="center">{row.grade}등급</TableCell>
                    <TableCell align="center">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </Box>
      <BottomNavigation />
    </Container>
  );
};

export default GradeCutPage;
