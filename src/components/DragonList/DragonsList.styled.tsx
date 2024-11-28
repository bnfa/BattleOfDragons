import styled from "@emotion/styled"
import { Typography, Card } from "@mui/material"
import { colors } from "../../constants/colors"

export const ListTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '28px',
  color: colors.black
}))

export const DragonNameTag = styled(Card)<{ selected?: boolean }>(({ selected }) => ({
  background: colors.white,
  border: selected ? `1px solid ${colors.black}` : 'none',
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  padding: '7px',
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}))


export const DragonName = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: colors.black,
  padding: '7px 0'
}))

export const DragonSection = styled.section(() => ({
  display: 'flex',
  marginTop: '20px',
  gap: '16px',
}))