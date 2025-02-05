import { motion } from "framer-motion";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-family: 'circular web';
  font-weight: 600px;
  color: #F2FA3F;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-family: 'Zentry';
  letter-spacing: 0.1em;
  color:#27B0F0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-family: 'general';
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;



const ItemWrapper = styled.div`
  font-family: 'roboto regular';
  letter-spacing: 0.1em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceCard = ({ experience }:any) => {
  return (
<>
      <Top>
        <LazyLoadImage
          src={experience?.img}
          alt={experience?.company}
          effect="blur"
          className="h-[50px] rounded-[10px] mt-1"
        />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <div className="w-full text-[8px] sm:text-base font-general text-white mb-2 sm:mb-4">
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience?.skills?.map((skill:any, index:number) => (
                  <div key={`skill-${index}`}>
                  <div className="absolute left-0 top-0 -z-10 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl animate-pulse" />
                  <motion.div
                    className="relative px-2 py-1 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                        {skill}
                    </motion.div>
                    
                  </div>
                ))}
              </ItemWrapper>
            </Skills>
          </>

        )}
      </div>
 </>
    
  );
};

export default ExperienceCard;