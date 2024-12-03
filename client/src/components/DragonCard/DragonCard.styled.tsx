import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const DragonCardContainer = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    minHeight: '200px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    flexDirection: 'column',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))
  
export const DragonCardTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 16,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 16,
        backgroundColor: colors.progressColor,
    },
}));

export const DragonName = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    color: colors.black,
    padding: '7px 0'
  }))

  export const DragonProps = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    padding: '7px 0'
  }))

  export const Line = styled.div(()=>({
    border: "1px solid rgba(0, 0, 0, 0.1)",
    marginTop: '5px',
    marginBottom:'10px'
  }))