"use client"

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
    </ChakraProvider>
  );
}
