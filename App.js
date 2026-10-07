import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const gold = "#D4AF37";
const black = "#050505";
const dark = "#111111";
const gray = "#A9A9A9";

export default function App() {
  const [screen, setScreen] = useState("Home");
  const [registered, setRegistered] = useState(false);

  const menu = ["Home", "Music", "Artists", "Events", "Register"];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.logo}>D17TH</Text>
        <View>
          <Text style={styles.title}>DISTRICT 17TH</Text>
          <Text style={styles.subtitle}>MUSIC INDUSTRY</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {screen === "Home" && (
          <>
            <Text style={styles.heroTitle}>One Platform.</Text>
            <Text style={styles.heroGold}>One Community.</Text>
            <Text style={styles.heroTitle}>One Movement.</Text>

            <Text style={styles.description}>
              Created by IB Diamond to give artists of District 17th a
              platform to showcase their talent, promote their music,
              connect with one another, and create opportunities for growth.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setScreen("Register")}
            >
              <Text style={styles.buttonText}>REGISTER FREE</Text>
            </TouchableOpacity>

            <Section title="Featured Music">
              <Card
                title="Brewerville Cypher Vol. 1"
                text="District 17th artists coming together through music."
              />
            </Section>

            <Section title="Upcoming Event">
              <Card
                title="Brewerville Cypher Concert"
                text="Riviera Beach • November 20"
              />
            </Section>
          </>
        )}

        {screen === "Music" && (
          <>
            <PageTitle title="Music" subtitle="Discover music from District 17th artists." />
            <Card title="Brewerville Cypher Vol. 1" text="Rap Version" />
            <Card title="Artist Releases" text="New music and releases will appear here." />
          </>
        )}

        {screen === "Artists" && (
          <>
            <PageTitle title="Artists" subtitle="Discover and connect with District 17th talent." />
            {["Vashie", "Roques V", "OG Bobbytino", "Love Bem", "Prettyboy Ejay"].map(
              (artist) => (
                <Card key={artist} title={artist} text="District 17th Artist" />
              )
            )}
          </>
        )}

        {screen === "Events" && (
          <>
            <PageTitle title="Events" subtitle="Music events, cyphers and community opportunities." />
            <Card
              title="Brewerville Cypher Concert"
              text="November 20 • Riviera Beach"
            />
            <Card
              title="District 17th Artist Events"
              text="More events coming soon."
            />
          </>
        )}

        {screen === "Register" && (
          <>
            <PageTitle
              title="Artist Registration"
              subtitle="Registration is 100% FREE."
            />

            {registered ? (
              <View style={styles.successBox}>
                <Text style={styles.successTitle}>Registration Started!</Text>
                <Text style={styles.description}>
                  Welcome to District 17th Music Industry. Your artist profile
                  can now be developed as we build the full platform.
                </Text>
              </View>
            ) : (
              <RegistrationForm onDone={() => setRegistered(true)} />
            )}
          </>
        )}
      </ScrollView>

      <View style={styles.nav}>
        {menu.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.navItem}
            onPress={() => setScreen(item)}
          >
            <Text
              style={[
                styles.navText,
                screen === item && { color: gold },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

function PageTitle({ title, subtitle }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.pageTitle}>{title}</Text>
      <Text style={styles.description}>{subtitle}</Text>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Card({ title, text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

function RegistrationForm({ onDone }) {
  const [name, setName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Artist Name"
        placeholderTextColor="#777"
        value={artistName}
        onChangeText={setArtistName}
      />

      <TextInput
        style={styles.input}
        placeholder="District 17th / Community"
        placeholderTextColor="#777"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.freeText}>
        ✓ Free artist registration
      </Text>
      <Text style={styles.freeText}>
        ✓ Artist profile
      </Text>
      <Text style={styles.freeText}>
        ✓ Music showcase
      </Text>
      <Text style={styles.freeText}>
        ✓ Events & opportunities
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={onDone}>
        <Text style={styles.buttonText}>JOIN DISTRICT 17TH</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
  },
  logo: {
    fontSize: 30,
    fontWeight: "900",
    color: gold,
    marginRight: 12,
  },
  title: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
  },
  subtitle: {
    color: gold,
    fontSize: 11,
    letterSpacing: 2,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
  },
  heroGold: {
    color: gold,
    fontSize: 34,
    fontWeight: "900",
  },
  description: {
    color: gray,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 14,
  },
  primaryButton: {
    backgroundColor: gold,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 22,
  },
  buttonText: {
    color: black,
    fontWeight: "900",
    fontSize: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },
  pageTitle: {
    color: gold,
    fontSize: 30,
    fontWeight: "900",
  },
  card: {
    backgroundColor: dark,
    borderWidth: 1,
    borderColor: "#292929",
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  cardText: {
    color: gray,
    marginTop: 7,
    fontSize: 14,
  },
  input: {
    backgroundColor: dark,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    marginBottom: 12,
  },
  freeText: {
    color: "#ddd",
    marginTop: 8,
  },
  successBox: {
    backgroundColor: dark,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: gold,
  },
  successTitle: {
    color: gold,
    fontSize: 22,
    fontWeight: "900",
  },
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0B0B0B",
    borderTopWidth: 1,
    borderTopColor: "#292929",
    paddingVertical: 13,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#aaa",
    fontSize: 11,
    fontWeight: "700",
  },
});
