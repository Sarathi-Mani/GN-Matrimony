import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const BRAND_COLOR = "#af0404";
const PAGE_BG = "#EBDCF4";
const PANEL_BG = "#FFFFFF";
const RELATION_OPTIONS = ["Father", "Mother", "Brother", "Sister", "Spouse"];

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [relation, setRelation] = useState<string>("");

  const handleRegister = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Relation:", relation);

    router.replace("/login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={require("../assets/images/bg1.jpeg")}
            style={styles.heroImage}
            resizeMode="stretch"
          />
          <Text style={styles.heroTitle}>Create{"\n"}Profile</Text>
          <Text style={styles.heroSubtitle}>Start your matrimony journey</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#9A9AA7"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9A9AA7"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              placeholder="Enter your mobile"
              placeholderTextColor="#9A9AA7"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Relation</Text>
            <View style={styles.relationList}>
              {RELATION_OPTIONS.map((item) => {
                const isSelected = relation === item;

                return (
                  <Pressable
                    key={item}
                    onPress={() => setRelation(item)}
                    style={[
                      styles.relationOption,
                      isSelected && styles.relationOptionActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.relationOptionText,
                        isSelected && styles.relationOptionTextActive,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <Pressable style={styles.primaryButton} onPress={handleRegister}>
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </Pressable>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text style={styles.footerLink}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PAGE_BG,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    height: 240,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 26,
    paddingTop: 64,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  heroTitle: {
    fontSize: 42,
    lineHeight: 44,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#DDD8E8",
    fontSize: 15,
  },
  card: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: PANEL_BG,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 30,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#4A4A55",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    color: "#232332",
    backgroundColor: "#F1EFF7",
  },
  relationList: {
    marginTop: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  relationOption: {
    width: "31.3%",
    minHeight: 42,
    borderWidth: 1,
    borderColor: "#E0DCEB",
    borderRadius: 12,
    backgroundColor: "#FAF9FD",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 9,
  },
  relationOptionActive: {
    backgroundColor: BRAND_COLOR,
    borderColor: BRAND_COLOR,
  },
  relationOptionText: {
    fontSize: 13,
    color: "#3A3948",
    fontWeight: "600",
  },
  relationOptionTextActive: {
    color: "#fff",
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: BRAND_COLOR,
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: BRAND_COLOR,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  footerRow: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    color: "#666377",
    fontSize: 14,
  },
  footerLink: {
    color: BRAND_COLOR,
    fontSize: 14,
    fontWeight: "700",
  },
});
