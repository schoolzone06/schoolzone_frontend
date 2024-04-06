import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Input, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box
      height="100vh"
      p="0 1.5rem"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={Logo} alt="logo" />
      <Typography
        width="80%"
        textAlign="center"
        sx={{ wordBreak: "keep-all", ...font.Body1, mt: "1rem" }}
      >
        대충 우리 서비스에 대한 글귀가 필요합니다. 카더가든
      </Typography>
      <Box
        mt="5rem"
        width="100%"
        display="flex"
        flexDirection="column"
        gap="0.625rem"
      >
        {["전화번호 (01012345678)", "인증번호"].map((placeholder) => (
          <Input
            key={placeholder}
            placeholder={placeholder}
            type="number"
            fullWidth
            disableUnderline
            sx={{
              border: `1px solid ${theme.gray[400]}`,
              borderRadius: "12px",
              height: "3rem",
              pl: "1rem",
              boxSizing: "border-box",
            }}
          />
        ))}
      </Box>
      <Box
        mt="2rem"
        width="100%"
        display="flex"
        flexDirection="column"
        gap="1rem"
        pb="18px"
        boxSizing="border-box"
        borderBottom={`1px solid ${theme.gray[400]}`}
      >
        {["인증번호 받기", "로그인"].map((label, index) => (
          <Button
            key={index}
            fullWidth
            sx={{
              backgroundColor: index === 0 ? theme.gray[300] : theme.primary,
              color: theme.white,
              height: "2.75rem",
              borderRadius: "12px",
              ...font.Subhead1,
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
      <Box
        mt="2rem"
        width="100%"
        display="flex"
        flexDirection="column"
        gap="2rem"
      >
        <Box display="flex" alignItems="center">
          <Typography>
            <Typography fontWeight="700" component="span">
              스쿨존
            </Typography>
            이 처음이라면?
          </Typography>
          <ArrowForwardIos sx={{ width: "1.125rem" }} />
        </Box>
        <Button
          fullWidth
          href="/signup"
          sx={{
            backgroundColor: theme.primary,
            color: theme.white,
            height: "2.75rem",
            borderRadius: "12px",
            ...font.Subhead1,
          }}
        >
          회원가입하기
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
