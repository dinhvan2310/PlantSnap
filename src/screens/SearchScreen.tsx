import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import SectionComponent from '../components/SectionComponent';
import InputComponent from '../components/InputComponent';
import {SearchNormal} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import RowComponent from '../components/RowComponent';
import CardComponent from '../components/CardComponent';
import SpaceComponent from '../components/SpaceComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  return (
    <Container isScroll={false}>
      <SectionComponent>
        <InputComponent
          icon={<SearchNormal size={24} color={colors.decs} />}
          placeholder="Search plant"
          onChange={() => {}}
          styles={{
            paddingVertical: 8,
          }}
        />
      </SectionComponent>

      <Container
        styles={{
          paddingTop: 0,
          paddingHorizontal: 0,
        }}>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={64} />
      </Container>
    </Container>
  );
};

export default SearchScreen;
