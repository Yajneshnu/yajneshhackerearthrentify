import { Box, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

const rentIcon = [
    {
        id: 1,
        img: "./logoImage/finestQuality.png",
        name: "Finest-quality site",
        desc: "Quality matters to you, and us! That's why we do a strict quality-check for every site."

    },
    
]

export const MoreRenting = () => {
    return (
        <Box width={{ base: '95%', sm: '95%', md: '95%', lg: '75%' }} margin={'auto'} textAlign={'start'} marginTop={{md:"-100px",sm:"50px",lg:"200px",xl:"50px"}}>
            <Box >
                <Text fontSize={'22px'} fontWeight={'600'} fontFamily={'Muli, sans-serif'}>There's more</Text>
                <Text fontSize={'22px'} fontFamily={'Muli, sans-serif'}>to renting</Text>
                <Box backgroundColor={'#dc3236'} borderRadius={'5px'} width={'3em'} height={'2.5px'} bottom={'-12px'}></Box>
            </Box>
            <Box marginTop={'50px'}>

                <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                    {
                        rentIcon.map((el) => (
                            <Box bg='transparent' key={el.id} height='242px' textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'10px'}>
                                <Box>
                                    <Image src={el.img} width={'60px'} height={'60px'} />
                                </Box>
                                <Box>
                                    <Text fontFamily={'Muli,sans-serif!important'} fontSize={'18px'} color={'#313131'} lineHeight={'1.5'}>{el.name}</Text>
                                </Box>
                                <Box>
                                    <Text fontFamily={'Muli,sans-serif!important'} fontWeight={'400'} fontSize={'14px'} lineHeight={'1.5'} color={'#717171'}>{el.desc}</Text>
                                </Box>
                            </Box>
                        ))
                    }

                </SimpleGrid>
            </Box>
            <a style={{textDecoration:"none"}} href="https://www.rentomojo.com/benefits" target="_blank">
              <Text fontSize={'16px'} zIndex={'100'} marginTop={'-30px'} color={'#1DBDC0'} fontWeight={'600'} fontFamily={'Muli,sans-serif!important'}>KNOW MORE</Text>
            </a>
        </Box>
    )
}